#!/bin/bash
set -e
set -o pipefail

yarn clean
yarn build
cp package.json LICENSE README.md dist/
cd dist/
npx np --preview