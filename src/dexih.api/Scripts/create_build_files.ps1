# build the front end
Push-Location ../dexih.frontend
ng build --prod --output-path ../dexih.api/wwwroot
Pop-Location

md wwwroot/remote.binaries

# build each version of the remote which can be downloaded by the front end.
Push-Location ../dexih.remote
dotnet restore -r win7-x64
dotnet publish -c release -r win7-x64 -f netcoreapp2.0
dotnet restore -r osx-x64
dotnet publish -c release -r osx-x64 -f netcoreapp2.0
dotnet restore -r linux-x64
dotnet publish -c release -r linux-x64 -f netcoreapp2.0

& ".\7za.exe" a ..\dexih.api\wwwroot\remote.binaries\dexih.remote.windows.netcore.zip ./bin/release/netcoreapp2.0/win7-x64/publish/*
& ".\7za.exe" a ..\dexih.api\wwwroot\remote.binaries\dexih.remote.mac.zip ./bin/release/netcoreapp2.0/osx-x64/publish/*
& ".\7za.exe" a ..\dexih.api\wwwroot\remote.binaries\dexih.remote.linux.zip ./bin/release/netcoreapp2.0/linux-x64/publish/*

Pop-Location


