#!/bin/bash

pkill hugo
hugo
rsync -azP public/ pioneer:public/
