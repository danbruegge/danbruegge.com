import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import "../../node_modules/normalize.css/normalize.css";

import THEME from "../theme";
import { HEADER_LINKS, FOOTER_LINKS } from "../config";

import Head from "./Head";
import Container from "./Container";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const currentTheme = THEME.default;

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${currentTheme.background.color};
    color: ${currentTheme.text.color};
    font-size: ${currentTheme.base.fontSizeMobile};
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 1.7em;
  }

  @media (${currentTheme.breakpoints.desktop}) {
    body {
      font-size: ${currentTheme.base.fontSizeDesktop};
      padding: 2rem;
    }
  }
`;

const Layout = ({ children, title }) => (
  <>
    <Head title={title} />
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Header links={HEADER_LINKS} />
        <Content>{children}</Content>
        <Footer links={FOOTER_LINKS} />
      </Container>
    </ThemeProvider>
    <GlobalStyle />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
};

export default Layout;
