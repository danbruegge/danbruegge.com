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
    color: "#fff"
  },
  text: {
    color: "#222"
  }
};

export const light = {
  background: base.background,
  text: base.text,
  link: {
    color: base.text.color,
    colorHover: "#000",
    colorUnderline: "#ac3"
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
