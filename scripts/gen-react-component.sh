#!/bin/bash

if [ "$1" != "" ]; then
    yarn nx generate @nrwl/react:component \
    --name="$1" \
    --export \
    --project=user-less-ui \
    --style=none \
    --directory="lib/$2"
else
  echo "Enter a name for your component"
  exit 1
fi
