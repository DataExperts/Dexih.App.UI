FROM microsoft/dotnet:2.0.0-runtime

WORKDIR /app
ADD appsettings.json /app/
ADD latest_version.txt /app/
ADD dexih.remote.run.linux.sh /app/

EXPOSE 33944:33944

ENTRYPOINT ["/app/dexih.remote.run.linux.sh"]  
