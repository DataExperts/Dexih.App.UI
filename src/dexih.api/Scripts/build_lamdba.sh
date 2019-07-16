#!/usr/bin/env bash
# APPNAME=$1
APPNAME="dexih_lamdba"
DEPLOYDIR=~/"Source/Deploy/${APPNAME}"

mkdir -p ${DEPLOYDIR}

echo "Deploy Dir:" $DEPLOYDIR

# build the front end
echo Building the dexih.frontend
pushd ~/Source/dexih.application/src/dexih.frontend
    ng build --prod --base-href /prod/ --output-path  ~/Source/dexih.application/src/dexih.api/wwwroot 
    if [ $? -ne 0 ]; then
        >&2 echo Build Frontend Failed
        exit 1
    fi
popd

# add the download scripts to the archives
#echo Updating dexih.remote download zip
#pushd ~/Source/dexih.application/src/dexih.api/Resources/RemoteAgents
#    ./create_archives.sh
#    if [ $? -ne 0 ]; then
#        >&2 echo Create Archives Failed
#        exit 1
#    fi
#popd

echo Building the dexih.api
pushd ~/Source/dexih.application/src/dexih.api
    # Get the build version
    VERSION_SUFFIX=`more version.txt`
    
    # Add 1 to the build version, and write back to version.txt
    VERSION_SUFFIX=`printf "%05d\n" $((10#$VERSION_SUFFIX +1))`
    echo 'Building version: '$VERSION_SUFFIX
    printf "%s" ${VERSION_SUFFIX} > version.txt
    
    # publishes with dotnet runtime already installed.
    dotnet publish -c debug --version-suffix C${VERSION_SUFFIX} -o ${DEPLOYDIR}
    if [ $? -ne 0 ]; then
        >&2 echo Build API Failed
        exit 1
    fi

    # publishes standalone
    # dotnet publish -c release -r win7-x64 -f netcoreapp2.2 --version-suffix C${VERSION_SUFFIX} -o ${DEPLOYDIR}
popd

pushd ${DEPLOYDIR}
    zip -r ../deploy.zip *
popd

