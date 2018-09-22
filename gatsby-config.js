module.exports = {
  siteMetadata: {
    title: "Gatsby Default Starter"
  },
  plugins: [
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    { resolve: "gatsby-plugin-stylelint", options: { files: ["**/*.js*"] } }
  ]
};
