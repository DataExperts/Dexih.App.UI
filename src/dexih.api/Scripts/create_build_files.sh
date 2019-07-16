# build the front end
pushd ~/Source/dexih.application/src/dexih.frontend
ng build --prod --output-path ~/Source/dexih.application/src/dexih.api/wwwroot
popd

mkdir wwwroot/remote.binaries

# build each version of the remote which can be downloaded by the front end.
pushd ~/Source/Dexih.App.Remote/src/dexih.remote
dotnet restore -r win7-x64
dotnet publish -c release -r win7-x64 -f netcoreapp2.2
dotnet restore -r osx-x64
dotnet publish -c release -r osx-x64 -f netcoreapp2.2
dotnet restore -r linux-x64
dotnet publish -c release -r linux-x64 -f netcoreapp2.2

pushd ./bin/release/netcoreapp2.0/win7-x64/publish
chmod
zip -r ~/Source/dexih.application/src/dexih.api/Resources/RemoteAgents/dexih.remote.windows.netcore.zip *
popd

pushd ./bin/release/netcoreapp2.0/osx-x64/publish
chmod a+x dexih.remote
zip -r ~/Source/dexih.application/src/dexih.api/Resources/RemoteAgents/dexih.remote.mac.zip *
popd

pushd ./bin/release/netcoreapp2.0/linux-x64/publish
chmod a+x dexih.remote
zip -r ~/Source/dexih.application/src/dexih.api/Resources/RemoteAgents/dexih.remote.linux.zip *
popd

popd


