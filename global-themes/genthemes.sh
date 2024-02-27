#!/usr/bin/env bash

rm -rf output
mkdir output

echo "Making org.kde.sumac-day.desktop"
mkdir output/org.kde.sumac-day.desktop

cp -a src/* output/org.kde.sumac-day.desktop
cp -a org.kde.sumac-day.desktop/* output/org.kde.sumac-day.desktop


echo "Making org.kde.sumac-pro-day.desktop"
mkdir output/org.kde.sumac-pro-day.desktop

cp -a src/* output/org.kde.sumac-pro-day.desktop
cp -a org.kde.sumac-pro-day.desktop/* output/org.kde.sumac-pro-day.desktop

echo "Making org.kde.sumac-night.desktop"
mkdir output/org.kde.sumac-night.desktop

cp -a src/* output/org.kde.sumac-night.desktop
cp -a org.kde.sumac-night.desktop/* output/org.kde.sumac-night.desktop

echo "Done"
