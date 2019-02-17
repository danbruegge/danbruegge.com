import Typography from "typography";

import { base, breakpoints } from "theme";

const typography: Typography = new Typography({
  baseFontSize: base.fontSize.mobile,
  bodyFontFamily: base.fontFamily,
  bodyColor: base.text.color,
  overrideStyles: () => ({
    body: {
      backgroundColor: base.background.color,
      padding: base.padding.mobile
    },
    [`@media (${breakpoints.desktop})`]: {
      body: {
        fontSize: base.fontSize.desktop,
        padding: base.padding.desktop
      }
    }
  })
});

export default typography;
