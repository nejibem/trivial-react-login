#!/bin/sh

APP_ENV=prod bin/console cache:clear
APP_ENV=prod bin/console cache:warmup
APP_ENV=prod composer install --optimize-autoloader --no-dev

yarn run build
aws s3 cp public/build s3://trivial-react-login/build --recursive --acl public-read
serverless deploy
