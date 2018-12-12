import fonts from "./fonts";

export default theme => `
  ${fonts}

  body {
    background-color: ${theme.background.color};
    color: ${theme.text.color};
    font-size: ${theme.base.fontSize};
    padding: 1rem 1rem 2rem;
    font-family: "Fira Mono", monospace;
  }

  h1 {
    font-size: 1.7em;
  }

  @media (${theme.breakpoints.desktop}) {
    body {
      padding: 3rem 2rem 2rem;
    }
  }
`;
