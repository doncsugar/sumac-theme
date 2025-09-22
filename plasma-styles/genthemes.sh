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

echo "Making sumac-night-molten-glass-plasma"
mkdir output/sumac-night-molten-glass-plasma

cp -a src-molten-glass/* output/sumac-night-molten-glass-plasma
cp -a sumac-night-molten-glass-plasma/* output/sumac-night-molten-glass-plasma

echo "Making sumac-day-molten-glass-plasma"
mkdir output/sumac-day-molten-glass-plasma

cp -a src-molten-glass/* output/sumac-day-molten-glass-plasma
cp -a sumac-day-molten-glass-plasma/* output/sumac-day-molten-glass-plasma

echo "Done"
