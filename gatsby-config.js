module.exports = {
  siteMetadata: {
    titleText: "<//> danbruegge.com",
    subTitleText: "Software developer",
    titleSuffix: "<//> Daniel Brüggemann - danbruegge.com",
    description: "Sample",
    headerLinks: [
      { name: "About", url: "/" },
      { name: "Vita", url: "/vita" },
      { name: "Notes", url: "/notes" }
    ],
    pages: {
      about: {
        title: "About",
        socialLinks: [
          { name: "Github", url: "https://github.com/danbruegge/" },
          {
            name: "Stackoverflow",
            url: "https://stackoverflow.com/users/1592039/danbruegge"
          },
          { name: "Twitter", url: "https://twitter.com/danbruegge" }
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
