
#!/usr/bin/env bash
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
                error_exit "$1 command is not installed.  Manually install this and rerun the script."
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
OS='osx'
PRE='stable'

SCRIPT=`basename "$0"`

# Install unzip if is does not exist
install unzip

# Install curl if is does not exist
install curl

if [ ! -d "${DIRECTORY}" ]; then
    mkdir ${DIRECTORY}
fi

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

# create a create_service.sh if it doesn't exist
if [ ! -f "create_service.sh" ]; then
        cat <<EOF >create_service.sh
sudo cp dexih.remote.plist /Library/LaunchDaemons/dexih.remote.plist
sudo sudo launchctl load /Library/LaunchDaemons/dexih.remote.plist
EOF
    chmod a+x create_service.sh
    echo "***** Use create_service.sh to add a systemctl service that will rerun on reboot or failure. *****"
fi

if [ ! -f "dexih.remote.service" ]; then
        cat <<EOF >dexih.remote.plist
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
	<dict>
		<key>Label</key>
		<string>dexih.remote</string>
		<key>Program</key>
		<string>${PWD}/${SCRIPT}</string>
		<key>KeepAlive</key>
		<true/>
	    <key>ThrottleInterval</key>
        <integer>10</integer>
        <key>StandardOutPath</key>
        <string>${PWD}/dexih.remote.log</string>
        <key>StandardErrorPath</key>
        <string>${PWD}/dexih.remote.error.log</string>
	</dict>
</plist>
EOF
    echo "***** Edit the dexih.remote.service file to configure systemctl settings. *****"
fi

if [ ! -f "start_service.sh" ]; then
    echo "sudo sudo launchctl load /Library/LaunchDaemons/dexih.remote.plist" > start_service.sh
    chmod a+x start_service.sh
    echo "***** Use start_service.sh to start the systemctl service. *****"
fi

if [ ! -f "stop_service.sh" ]; then
    echo "sudo sudo launchctl unload /Library/LaunchDaemons/dexih.remote.plist" > stop_service.sh
    chmod a+x stop_service.sh
    echo "***** Use stop_service.sh to stop the systemctl service. *****"
fi

# 20 is the return value of the dexih.remote if an upgrade is suggested.
UPGRADE=20

while [ ${UPGRADE} -eq 20 ]
do
 # if there is an update directory, then copy it over the existing files.
    if [ -d "${DIRECTORY}/update" ]; then
        echo Updating the binaries...
        TEMP_DIRECTORY=`mktemp -d -t dexih.remote`
        BACKUP_DIRECTORY="dexih_remote_`date +"%Y%m%d%H%M%S"`"
        mv ${DIRECTORY}/update ${TEMP_DIRECTORY} || error_exit "Could not move files from ${DIRECTORY}/update to ${TEMP_DIRECTORY}"
        mv ${DIRECTORY} ${BACKUP_DIRECTORY} || error_exit "Could not move files from ${DIRECTORY} to ${BACKUP_DIRECTORY}"
        mv ${TEMP_DIRECTORY} ${DIRECTORY} || error_exit "Could not move files from ${TEMP_DIRECTORY} to ${DIRECTORY}"
        
        echo Previous version is backed up to ${BACKUP_DIRECTORY}
    else 
        VERSION_INFO=`curl -s "${SERVER}/api/Remote/LatestVersion/${OS}/${PRE}"`
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
                curl -L -o "${LATEST_BINARY}" "${LATEST_URL}" || error_exit "Could not download the install file from ${LATEST_URL}.  Try downloading manually to this directory and rerun the script."
            fi
    
            if [ ! -f ${LATEST_BINARY} ]; then
                echo The file ${LATEST_BINARY} was not found.
                exit
            fi
    
            # Clean out the previous directory contents.
            if [ -d ${DIRECTORY} ]; then
                rm -rf ${DIRECTORY}/*
            else
                mkdir ${DIRECTORY}
            fi
            
            TEMP_DIRECTORY=`mktemp -d -t dexih.remote`
            BACKUP_DIRECTORY="dexih_remote_`date +"%Y%m%d%H%M%S"`"
            
            unzip -q ${LATEST_BINARY} -d ${TEMP_DIRECTORY} || error_exit "Could not unzip the ${LATEST_BINARY}, check the file is a valid zip file."
            
            mv ${DIRECTORY} ${BACKUP_DIRECTORY} || error_exit "Could not move files from ${DIRECTORY} to ${BACKUP_DIRECTORY}"
            
            echo Previous version is backed up to ${BACKUP_DIRECTORY}

            mv ${TEMP_DIRECTORY} ${DIRECTORY} || error_exit "Could not move files from ${TEMP_DIRECTORY} to ${DIRECTORY}"

            rm ${LATEST_BINARY}
    
            echo ${LATEST_VERSION} > dexih.remote.version || error_exit "Could not update the file local_version.txt, check the file permissions."
    
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