module.exports = {
  siteMetadata: {
    titleText: "<//> danbruegge.com",
    subTitleText: "Software developer",
    titleSuffix: "<//> Daniel Brüggemann - danbruegge.com",
    description: "Sample",
    headerLinks: [
      { name: "About", url: "/" },
      { name: "Vita", url: "/vita" },
      { name: "Referenzen", url: "/referenzen" },
      { name: "Notes", url: "/notes" }
    ],
    pages: {
      about: {
        title: "About",
        socialLinks: [
          { name: "Github", url: "https://github.com/" },
          { name: "Stackoverflow", url: "https://stackoverflow.com/" },
          { name: "Twitter", url: "https://twitter.com/" }
        ]
      }
    }
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
