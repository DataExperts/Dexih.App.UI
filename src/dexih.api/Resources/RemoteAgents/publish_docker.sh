#!/usr/bin/env bash

cp ../../../../../Dexih.App.Remote/src/dexih.remote/latest_version.txt .
docker build . -t dexih/remote
docker push dexih/remote
