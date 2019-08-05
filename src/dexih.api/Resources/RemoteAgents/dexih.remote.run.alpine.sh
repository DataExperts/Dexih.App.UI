#!/usr/bin/env ash
# This script downloads the remote agent binaries and runs the remote agent.

# An error exit function
error_exit()
{
        echo "$1" 1>&2
        exit 1
}

install() 
{
        if ! [ -x "$(command -v $1)" ]; then
            apk --no-cache add $1  || error_exit "Cannot run 'apt-get $1'.  Try rerunning script with sudo."
        fi
}

if [ -z "$1" ]
then
      SERVER='https://dexih.com'
else
      SERVER=$1
fi

echo "***** Using dexih at $SERVER *****"

DIRECTORY='dexih.remote'
OS='alpine'
PRE='stable'

SCRIPT=`basename "$0"`

# Install unzip if is does not exist
install unzip

# Install wget if is does not exist
install wget

# create a start script if it doesn't exist
if [ ! -f "start.sh" ]; then
    echo "./${SCRIPT} &> log\`date +"%Y%m%d_%H%M%S"\`.txt &" > start.sh
    chmod a+x start.sh
    echo "***** Use start.sh to run the process in the background with logs. *****"
fi

# create a stop script if it doesn't exist
if [ ! -f "stop.sh" ]; then
    echo "sudo pkill -f dexih.remote" > stop.sh
    chmod a+x stop.sh
    echo "***** Use stop.sh to stop the background agent. *****"
fi

# 20 is the return value of the dexih.remote if an upgrade is suggested.
UPGRADE=20

while [ ${UPGRADE} -eq 20 ]
do
    # if there is an update directory, then copy it over the existing files.
    if [ -d "${DIRECTORY}/update" ]; then
        echo Updating the binaries...
        TEMP_DIRECTORY=`mktemp -d -t dexih.remote.XXXXX`
        BACKUP_DIRECTORY="dexih_remote_`date +"%Y%m%d%H%M%S"`"
        mv ${DIRECTORY}/update ${TEMP_DIRECTORY} || error_exit "Could not move files from ${DIRECTORY}/update to ${TEMP_DIRECTORY}"
        mv ${DIRECTORY} ${BACKUP_DIRECTORY} || error_exit "Could not move files from ${DIRECTORY} to ${BACKUP_DIRECTORY}"
        mv ${TEMP_DIRECTORY} ${DIRECTORY} || error_exit "Could not move files from ${TEMP_DIRECTORY} to ${DIRECTORY}"
        
        echo Previous version is backed up to ${BACKUP_DIRECTORY}
    else 
    
        VERSION_INFO=`wget -q -O - "${SERVER}/api/Remote/LatestVersion/${OS}/${PRE}"`
        LATEST_VERSION=$(echo "${VERSION_INFO}" | head -1 | tail -1)
        LATEST_BINARY=$(echo "${VERSION_INFO}" | head -2 | tail -1)
        LATEST_URL=$(echo "${VERSION_INFO}" | head -3 | tail -1)
    
        if [ -f "local_version.txt" ]; then
            LOCAL_VERSION=`cat local_version.txt`
        fi
    
        echo LOCAL_VERSION ${LOCAL_VERSION}
        echo LATEST_VERSION ${LATEST_VERSION}
        echo LATEST_BINARY ${LATEST_BINARY}
        echo LATEST_URL ${LATEST_URL}
    
        if [ ! -z "${PREVIOUS_VERSION}" ] && [ "${PREVIOUS_VERSION}" -eq "${LATEST_VERSION}" ]; then
            echo The latest binary has already been downloaded, and another upgrade has been requested.
            echo The script will exit to avoid a infinte download loop.
            exit
        fi
        
        if [ "${LATEST_VERSION}" != "${LOCAL_VERSION}" ]  || [ ! -d ${DIRECTORY}  ]; then
    
            if [ ! -f ${LATEST_BINARY} ]; then
                echo Downloading latest version from "${LATEST_URL}"
                wget -O "${LATEST_BINARY}" "${LATEST_URL}" || error_exit "Could not download the install file from ${LATEST_URL}.  Try downloading manually to this directory and rerun the script."
            fi
    
            if [ ! -f ${LATEST_BINARY} ]; then
                echo The file ${LATEST_BINARY} was not found.
                exit
            fi
    
            TEMP_DIRECTORY=`mktemp -d -t dexih.remote.XXXXX`
            BACKUP_DIRECTORY="dexih_remote_`date +"%Y%m%d%H%M%S"`"
            
            unzip -q ${LATEST_BINARY} -d ${TEMP_DIRECTORY} || error_exit "Could not unzip the ${LATEST_BINARY}, check the file is a valid zip file."
            
            mv ${DIRECTORY} ${BACKUP_DIRECTORY} || error_exit "Could not move files from ${DIRECTORY} to ${BACKUP_DIRECTORY}"
            
            echo Previous version is backed up to ${BACKUP_DIRECTORY}

            mv ${TEMP_DIRECTORY} ${DIRECTORY} || error_exit "Could not move files from ${TEMP_DIRECTORY} to ${DIRECTORY}"

            rm ${LATEST_BINARY}
    
            echo ${LATEST_VERSION} > dexih.remote.version || error_exit "Could not update the file dexih.remote.version, check the file permissions."
    
            chmod a+x ./${DIRECTORY}/dexih.remote || error_exit "Could not update the permissions on the ${DIRECTORY}/dexih.remote file."
    
            PREVIOUS_BINARY=${LATEST_BINARY}
            PREVIOUS_VERSION=${LATEST_VERSION}
        fi
    fi

    if [ ! -f "${DIRECTORY}/dexih.remote" ]; then
        error_exit "The dexih.remote binary was not found in the directory ${DIRECTORY}."
    fi
    
    if [ "${1}" == 'install' ]; then                            
        echo The dexih.remote binary was installed.
        exit
    fi   

    # Run the remote agent
    ${DIRECTORY}/dexih.remote $1
    UPGRADE=$?
done