#!/usr/bin/env bash

rm -rf output
mkdir output

echo "Making sumac-wallpapers"
mkdir output/sumac-wallpapers
mkdir -p output/sumac-wallpapers/contents/src/images
mkdir -p output/sumac-wallpapers/contents/images
mkdir -p output/sumac-wallpapers/contents/images_dark

cp -a sumac-wallpapers/* output/sumac-wallpapers
cp -a src/* output/sumac-wallpapers/contents/src/images
mv output/sumac-wallpapers/contents/src/images/sumac-day-13.svg "output/sumac-wallpapers/contents/src/images/Sumac Day 13.svg"
mv output/sumac-wallpapers/contents/src/images/sumac-night-13.svg "output/sumac-wallpapers/contents/src/images/Sumac Night 13.svg"
ln -s "../src/images/Sumac Day 13.svg" output/sumac-wallpapers/contents/images/6000x6000.svg
ln -s "../src/images/Sumac Night 13.svg" output/sumac-wallpapers/contents/images_dark/6000x6000.svg

echo "Done"
