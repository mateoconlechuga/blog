#!/bin/bash
rm -rf public
hugo --gc --minify && find public -name '*.jpg' -exec /bin/rm {} \;

# for convert images
# exiftool '-FileName<${FileSequence;$_=0 x(3-length($_+1)).($_+1)}.jpg' -FileOrder DateTimeOriginal .
