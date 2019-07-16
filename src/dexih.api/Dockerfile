FROM mcr.microsoft.com/dotnet/core/sdk:2.2 AS build
WORKDIR /app

# Get source files
RUN git clone https://g7gsk3cczsgxcmhlb5yrgld54qfgbn2a54efwcze2zgolt73ta3q@dexih.visualstudio.com/DefaultCollection/_git/dexih.application --depth=1
RUN git clone https://github.com/DataExperts/dexih.transforms --depth=1
RUN git clone https://github.com/DataExperts/Dexih.App.Remote --depth=1
RUN git clone https://github.com/DataExperts/Dexih.App.Operations --depth=1
RUN git clone https://github.com/DataExperts/Dexih.Utils.CopyProperties --depth=1
RUN git clone https://github.com/DataExperts/Dexih.Utils.ManagedTasks --depth=1

WORKDIR /app/dexih.application/src/dexih.frontend
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install -y build-essential nodejs
RUN npm link @angular/cli
RUN npm install
RUN ng build --prod --output-path /app/dexih.application/src/dexih.api/wwwroot

WORKDIR /app/dexih.application/src/dexih.api
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:2.2 AS runtime

WORKDIR /app/
COPY --from=build /app/dexih.application/src/dexih.api/out .
ENTRYPOINT ["dotnet", "dexih.api.dll"]