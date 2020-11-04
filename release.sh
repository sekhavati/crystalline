#!/bin/bash
set -e
set -o pipefail

yarn clean
yarn build
npx np --no-publish
cp package.json LICENSE README.md dist/
npm login
npm publish dist
npm logout