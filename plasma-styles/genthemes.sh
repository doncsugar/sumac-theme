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

echo "Done"
