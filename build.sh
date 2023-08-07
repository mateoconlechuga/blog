#!/bin/bash

rm -rf public
hugo --gc --minify -b "https://mateoconlechuga.com/" && find public -name '*.jpg' -exec /bin/rm {} \;

