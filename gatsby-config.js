module.exports = {
  siteMetadata: {
    titleSuffix: "<//> Daniel Brüggemann - danbruegge.com",
    description: "Sample"
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
