#!/bin/bash

rm -rf public/
pkill hugo
hugo
rsync -azP public/ pioneer:public/
