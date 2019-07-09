const siteMetadata = require("./site-metadata");

const isDev = !!process.env.NODE_ENV;

module.exports = {
  siteMetadata,
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-styled-components",
      options: {
        displayName: isDev
      }
    },
    {
      resolve: "@danbruegge/gatsby-plugin-stylelint",
      options: {
        files: ["**/*.{js,jsx,ts,tsx}"]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    }
  ]
};
