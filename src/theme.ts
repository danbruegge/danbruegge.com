export const BREAKPOINTS = {
  desktop: "750px"
};

export const breakpoints = {
  desktop: `min-width: ${BREAKPOINTS.desktop}`,
  desktopSize: BREAKPOINTS.desktop
};

export const base = {
  fontSize: {
    mobile: "18px",
    desktop: "25px"
  },
  fontFamily: ["Fira Mono", "monospace"],
  padding: {
    mobile: "1rem 1rem 2rem",
    desktop: "3rem 2rem 2rem"
  },
  background: {
    color: "#eeeeee"
  },
  text: {
    color: "#222222"
  },
  colors: {
    black: "#000000",
    grey: "#dddddd",
    primary: "#aacc33"
  }
};

export const light = {
  background: base.background,
  text: base.text,
  colors: base.colors,
  link: {
    color: base.text.color,
    colorHover: base.colors.black,
    colorUnderline: base.colors.primary
  },
  header: {
    title: {
      color: base.text.color,
      weight: "700",
      size: "1.5em"
    },
    subtitle: {
      color: base.text.color,
      weight: "700",
      size: "1em"
    }
  }
};
