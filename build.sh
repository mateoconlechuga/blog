#!/bin/bash

rm -rf public
hugo --gc --minify -b "https://mateoconlechuga.com/"
if [ $? -ne 0 ]; then
  echo 'build failed'
  exit 1
fi
cd public
find . -name '*.jpg' -exec /bin/rm {} \;
rm -rf location
