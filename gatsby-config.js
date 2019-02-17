module.exports = {
  siteMetadata: {
    titleText: "<//> danbruegge.com",
    subTitleText: "Software developer",
    titleSuffix: "<//> Daniel Brüggemann - danbruegge.com",
    description: "Sample",
    headerLinks: [
      { name: "Home", url: "/" },
      { name: "About", url: "/about" },
      { name: "Vita", url: "/cv" },
      { name: "Projects", url: "/projects" }
    ],
    footerLinks: [
      { name: "Github", url: "https://github.com/" },
      { name: "Stackoverflow", url: "https://stackoverflow.com/" },
      { name: "Twitter", url: "https://twitter.com/" },
      { name: "Notes", url: "/notes" }
    ]
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    "@danbruegge/gatsby-plugin-stylelint",
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
