#!/bin/bash
set -e
set -o pipefail

yarn clean
yarn build
cp package.json LICENSE README.md dist/
cd dist/
npm login
npx np --no-tests
npm logout
cd ../