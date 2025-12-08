#!/usr/bin/env bash

rm -rf output
mkdir output

echo "Making Molten Glass themes"
mkdir output/sumac-molten-glass

echo "Making Day Molten Glass themes"
cp -a sumac-molten-glass/SumacDayMoltenGlass.colorscheme output/sumac-molten-glass
sed -e 's/^Description=.*/Description=Sumac Day Molten Glass Opaque/' -e 's/^Opacity=.*/Opacity=1.0/' sumac-molten-glass/SumacDayMoltenGlass.colorscheme > output/sumac-molten-glass/SumacDayMoltenGlassOpaque.colorscheme

echo "Making Night Molten Glass themes"
cp -a sumac-molten-glass/SumacNightMoltenGlass.colorscheme output/sumac-molten-glass
sed -e 's/^Description=.*/Description=Sumac Night Molten Glass Opaque/' -e 's/^Opacity=.*/Opacity=1.0/' sumac-molten-glass/SumacNightMoltenGlass.colorscheme > output/sumac-molten-glass/SumacNightMoltenGlassOpaque.colorscheme

echo "Done"
