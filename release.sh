#!/bin/bash
set -e
set -o pipefail

yarn clean
yarn build
npx np --no-publish --preview
cp package.json LICENSE README.md dist/
npm login
npm publish dist --dry-run
npm logout