#!/usr/bin/env bash

rm -rf output
mkdir output

echo "Making sumac-day-plasma"
mkdir output/sumac-day-plasma

cp -a src/* output/sumac-day-plasma
cp -a sumac-day-plasma/* output/sumac-day-plasma

echo "Making sumac-night-plasma"
mkdir output/sumac-night-plasma

cp -a src/* output/sumac-night-plasma
cp -a sumac-night-plasma/* output/sumac-night-plasma

echo "Making sumac-molten-glass-neutral-plasma"
mkdir output/sumac-molten-glass-neutral-plasma

cp -a src-molten-glass/* output/sumac-molten-glass-neutral-plasma
# overwrite all base assets with translucent, there is only one style
cp -a output/sumac-molten-glass-neutral-plasma/translucent/* output/sumac-molten-glass-neutral-plasma/

echo "Making sumac-night-molten-glass-plasma"
mkdir output/sumac-night-molten-glass-plasma

cp -a src-molten-glass/* output/sumac-night-molten-glass-plasma
cp -a sumac-night-molten-glass-plasma/* output/sumac-night-molten-glass-plasma
# overwrite all base assets with translucent, there is only one style
cp -a output/sumac-night-molten-glass-plasma/translucent/* output/sumac-night-molten-glass-plasma/

echo "Making sumac-day-molten-glass-plasma"
mkdir output/sumac-day-molten-glass-plasma

cp -a src-molten-glass/* output/sumac-day-molten-glass-plasma
cp -a sumac-day-molten-glass-plasma/* output/sumac-day-molten-glass-plasma
# overwrite all base assets with translucent, there is only one style
cp -a output/sumac-day-molten-glass-plasma/translucent/* output/sumac-day-molten-glass-plasma/

echo "Making sumac-molten-glass-plasma-doncsugar"
mkdir output/sumac-molten-glass-plasma-doncsugar

cp -a src-molten-glass/* output/sumac-molten-glass-plasma-doncsugar
cp -a sumac-molten-glass-plasma-doncsugar/* output/sumac-molten-glass-plasma-doncsugar
# overwrite all base assets with translucent, there is only one style
cp -a output/sumac-molten-glass-plasma-doncsugar/translucent/* output/sumac-molten-glass-plasma-doncsugar/

echo "Done"
