#!/usr/bin/env bash
# build the front end
pushd ~/Source/dexih.application/src/dexih.frontend
ng build --prod --output-path ~/Source/dexih.application/src/dexih.api/wwwroot
popd