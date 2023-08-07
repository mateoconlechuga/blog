#!/bin/bash

function rename_exif {
  rename 's//'$RANDOM'/' *.jpg && exiftool '-FileName<${FileSequence;$_=0 x(3-length($_+1)).($_+1)}.jpg' -FileOrder DateTimeOriginal .
}

if [ $# -eq 0 ]; then
    cd content
    for dir in *; do
        if [ -d "$dir" ] && [ "$dir" != "about" ]; then
            cd "$dir"
            rename_exif
            cd -
        fi
    done
else
    cd $1
    rename_exif
    cd -
fi

