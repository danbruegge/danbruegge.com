import * as React from "react";
import { ThemeProvider } from "styled-components";

import { THEME } from "theme";
import { HEADER_LINKS, FOOTER_LINKS } from "config";

import { Head } from "./Head";
import Container from "./Container";
import { Header } from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const currentTheme = THEME.default;

interface Props {
  children: React.ReactNode;
  title: string;
}

export const Layout = ({ children, title }: Props): JSX.Element => (
  <>
    <Head title={title} />
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Header links={HEADER_LINKS} />
        <Content>{children}</Content>
        <Footer links={FOOTER_LINKS} />
      </Container>
    </ThemeProvider>
  </>
);
