#!/usr/bin/env bash

rm -rf output
mkdir output

echo "Making Sumac-Day"
mkdir output/Sumac-Day

cp -a src/* output/Sumac-Day
cp -a Sumac-Day/* output/Sumac-Day
$(cd output/Sumac-Day && find . -maxdepth 1 -mindepth 1 -type d | xargs -I % basename % | xargs -I % ln -sf "%" "%@2x")

echo "Making Sumac-Night"
mkdir output/Sumac-Night

cp -a src/* output/Sumac-Night
cp -a Sumac-Night/* output/Sumac-Night
$(cd output/Sumac-Night && find . -maxdepth 1 -mindepth 1 -type d | xargs -I % basename % | xargs -I % ln -sf "%" "%@2x")


echo "Making Sumac-Day-Molten-Glass"
mkdir output/Sumac-Day-Molten-Glass

cp -a src-molten-glass/* output/Sumac-Day-Molten-Glass
cp -a Sumac-Day-Molten-Glass/* output/Sumac-Day-Molten-Glass
$(cd output/Sumac-Day-Molten-Glass && find . -maxdepth 1 -mindepth 1 -type d | xargs -I % basename % | xargs -I % ln -sf "%" "%@2x")

echo "Making Sumac-Night-Molten-Glass"
mkdir output/Sumac-Night-Molten-Glass

cp -a src-molten-glass/* output/Sumac-Night-Molten-Glass
cp -a Sumac-Night-Molten-Glass/* output/Sumac-Night-Molten-Glass
$(cd output/Sumac-Night-Molten-Glass && find . -maxdepth 1 -mindepth 1 -type d | xargs -I % basename % | xargs -I % ln -sf "%" "%@2x")
