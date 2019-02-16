const BREAKPOINTS = {
  desktop: "750px"
};

export const THEME = {
  default: {
    base: {
      fontSize: {
        mobile: "18px",
        desktop: "25px"
      },
      fontFamily: ["Fira Mono", "monospace"],
      padding: {
        mobile: "1rem 1rem 2rem",
        desktop: "3rem 2rem 2rem"
      }
    },
    breakpoints: {
      desktop: `min-width: ${BREAKPOINTS.desktop}`,
      desktopSize: BREAKPOINTS.desktop
    },
    background: {
      color: "#fff"
    },
    text: {
      color: "#222"
    },
    link: {
      color: "#222",
      colorHover: "#000",
      colorUnderline: "#ac3"
    },
    header: {
      title: {
        color: "#222",
        weight: "700",
        size: "1.5em"
      },
      subtitle: {
        color: "#222",
        weight: "700",
        size: "1em"
      }
    }
  }
};
