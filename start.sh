#!/bin/bash

cd fetch-posts
npm run production

cd ../post-service
npm run production

cd ../maybe-maybe-maybe
npm run production