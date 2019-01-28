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

import globalStyling from "../globalStyling";

const currentTheme = THEME.default;

const GlobalStyle = createGlobalStyle`
  ${globalStyling(currentTheme)}
`;

const Layout = ({ children, title }) => (
  <>
    <Head title={`${title} <//> Daniel Brüggemann - danbruegge.com`} />
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
