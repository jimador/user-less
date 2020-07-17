#!/bin/bash

if [ "$1" != "" ]; then
    yarn nx g @nrwl/react:component-story --project=user-less-ui --componentPath=$1
else
  echo "Enter a path to your component"
  exit 1
fi
