#!/bin/bash

cd fetch-posts
npm i
npm run production

cd ../post-service
npm i
npm run production

cd ../maybe-maybe-maybe
npm i
npm run production