#!/usr/bin/env bash

APPNAME=$1
GROUP=$2
GIT="https://garyholland@${APPNAME}.scm.azurewebsites.net:443/${APPNAME}.git"
DEPLOY="./../../../Deploy/"
DEPLOYDIR="${DEPLOY}${APPNAME}"
echo $GIT
echo $DEPLOYDIR

pushd ../
source ${DEPLOY}/azure.config.sh

# Create the resource group
az group create --name $GROUP --location EastUS

# Create an App Service plan.
az appservice plan create --name $APPNAME --resource-group $GROUP --sku FREE

# Create the Web App
az webapp create --name $APPNAME --resource-group $GROUP --plan $APPNAME
az webapp deployment source config-local-git -n $APPNAME -g $GROUP --query [url] -o tsv

# Configure the app settings
az webapp config appsettings set -g $GROUP -n $APPNAME --settings AppSettings:GoogleClientId=$GoogleClientId AppSettings:MicrosoftClientId=$MicrosoftClientId AppSettings:MicrosoftClientSecret=$MicrosoftClientSecret AppSettings:EncryptionKey=$EncryptionKey AppSettings:GoogleClientSecret=$GoogleClientSecret AppSettings:SendGrid_API=$SendGrid_API AppSettings:RepositoryType=$RepositoryType
az webapp config connection-string set -g $GROUP -n $APPNAME -t $RepositoryType --settings  DefaultConnection='${DefaultConnection}'

mkdir $DEPLOYDIR
dotnet publish -o $DEPLOYDIR

pushd $DEPLOYDIR
git init
git add --all
git commit -a -m "update"

git remote add azure $GIT
git push azure master
popd
popd