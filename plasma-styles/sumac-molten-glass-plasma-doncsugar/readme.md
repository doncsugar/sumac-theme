# Theme Overrides
Molten Glass uses a few modifications to maintain legibility under glass constraints.

As indicated by the doncsugar in the name, this is a custom spin-off tailored to my preferences. It will use hacks that I am willing to implement, but may break the plasma theme.

## Dark Theme Details
Background color is currently controlled through the colors file. It should probably be hard coded.
Foreground text color should be defined by opacity, not lightness. Choosing a full opacity color, but mixing it with background color will result in readability issues when shown over a blurred background that is similar in color. Choosing the original color will allow the resulting visible color to mix with the blurred background and generate its own contrast, becoming more readable.
The dark aspect of this is controlled directly by the Contrast Effect parameters and minimal to no changes are made to assets.

The following changes are made on top of the base Summaculate Dark colors:
- ForegroundNormal is to be made into a reduced opacity white (255,255,255,252)
- ForegroundInactive is to be made into a reduced opacity white (255,255,255,158)
- Window BackgroundNormal is to be made into a near black gray (30,30,30)

The following changes are made on top of the base Molten Glass Neutral plasma style:
