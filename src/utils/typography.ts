import Typography from "typography";

import { THEME } from "./../theme";

const currentTheme = THEME.default;

const typography: Typography = new Typography({
  baseFontSize: currentTheme.base.fontSize.mobile,
  bodyFontFamily: currentTheme.base.fontFamily,
  bodyColor: currentTheme.text.color,
  overrideStyles: () => ({
    body: {
      backgroundColor: currentTheme.background.color,
      padding: currentTheme.base.padding.mobile
    },
    [`@media (${currentTheme.breakpoints.desktop})`]: {
      body: {
        fontSize: currentTheme.base.fontSize.desktop,
        padding: currentTheme.base.padding.desktop
      }
    }
  })
});

export default typography;
