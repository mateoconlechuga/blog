#!/bin/bash

rm -rf public
hugo --gc --minify -b "https://mateoconlechuga.com/"
if [ $? -ne 0 ]; then
  echo 'build failed'
  exit 1
fi
cd public
find . -name '*.jpg' -exec /bin/rm {} \;
for file in $(find . -type f \( -iname '*.html' -o -iname '*.css' -o -iname '*.js' -o -iname '*.svg' \) ); do gzip -9nkf $file; done
rm -rf location index.html.gz

