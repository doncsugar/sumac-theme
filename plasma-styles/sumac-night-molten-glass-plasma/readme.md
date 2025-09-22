# Theme Overrides
Molten Glass uses a few modifications to maintain legibility under glass constraints.

## Dark Theme Details
Background color is currently controlled through the colors file. It should probably be hard coded.
Foreground text color should be defined by opacity, not lightness. Choosing a full opacity color, but mixing it with background color will result in readability issues when shown over a blurred background that is similar in color. Choosing the original color will allow the resulting visible color to mix with the blurred background and generate its own contrast, becoming more readable.
The dark aspect of this is controlled directly by the Contrast Effect parameters and minimal to no changes are made to assets.

The following changes are made on top of the base Summaculate Dark colors:
- ForegroundNormal is to be made into a reduced opacity white (255,255,255,252)
- ForegroundInactive is to be made into a reduced opacity white (255,255,255,158)
- Window BackgroundNormal is to be made into a near black gray (30,30,30)

The following changes are made on top of the base Molten Glass Neutral plasma style Contrast Effect parameters:
- Contrast is raised to 0.9 to decrease available lightness
- Saturation stays at 1.4, boosting edge saturation
- Intensity is decreased to 1.1 to also reduce lightness
