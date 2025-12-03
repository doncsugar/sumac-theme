#!/usr/bin/env bash

rm -rf output
mkdir output

echo "Making sumac-day-molten-glass-blur"
mkdir output/sumac-day-molten-glass-blur

cp -a sumac-molten-glass/src-molten-glass-day/* output/sumac-day-molten-glass-blur
cp -a sumac-molten-glass/sumac-day-molten-glass-blur/* output/sumac-day-molten-glass-blur


echo "Making sumac-night-molten-glass-blur"
mkdir output/sumac-night-molten-glass-blur

cp -a sumac-molten-glass/src-molten-glass-night/* output/sumac-night-molten-glass-blur
cp -a sumac-molten-glass/sumac-night-molten-glass-blur/* output/sumac-night-molten-glass-blur



echo "Making sumac-day-molten-glass-opaque"
mkdir output/sumac-day-molten-glass-opaque

cp -a sumac-molten-glass/src-molten-glass-day/* output/sumac-day-molten-glass-opaque
cp -a sumac-molten-glass/sumac-day-molten-glass-opaque/* output/sumac-day-molten-glass-opaque


echo "Making sumac-night-molten-glass-opaque"
mkdir output/sumac-night-molten-glass-opaque

cp -a sumac-molten-glass/src-molten-glass-night/* output/sumac-night-molten-glass-opaque
cp -a sumac-molten-glass/sumac-night-molten-glass-opaque/* output/sumac-night-molten-glass-opaque

echo "Done"
