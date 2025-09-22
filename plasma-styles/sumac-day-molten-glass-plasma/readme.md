# Theme Overrides
Molten Glass uses a few modifications to maintain legibility under glass constraints.

## Light Theme Details
Background color is currently controlled through the colors file. It should probably be hard coded.
Foreground text color should be defined by opacity, not lightness. Choosing a full opacity color, but mixing it with background color will result in readability issues when shown over a blurred background that is similar in color. Choosing the original color will allow the resulting visible color to mix with the blurred background and generate its own contrast, becoming more readable.
The shadow was increased from 3% opacity to 15% opacity to improve legibility against white backgrounds.

The following changes are made on top of the base Summaculate Light colors:
- ForegroundNormal is to be made into a reduced opacity black (0,0,0,218)
- ForegroundInactive is to be made into a reduced opacity black (0,0,0,128)
- Window BackgroundNormal is to be made into a light gray (208,208,208)

The following changes are made on top of the base Molten Glass Neutral plasma style:
- Edge highlights are doubled in opacity
- Gradient underlay is switched from black to white
- Gradient base is raised from 20% opacity to 30%

The following changes are made on top of the base Molten Glass Neutral plasma style Contrast Effect parameters:
- Contrast is driven down to 0.6 for greater available lightness
- Saturation is raised to 1.9 to compensate for contrast decrease
- Intensity is kept the same at 1.2
