import * as React from "react";
import { ThemeProvider } from "styled-components";

import { currentTheme } from "utils/typography";

import { Head } from "./Head";
import { Container } from "./Container";
import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

interface Props {
  children: React.ReactNode;
  title: string;
}

export const Layout = ({ children, title }: Props): JSX.Element => (
  <>
    <Head title={title} />
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Header />
        <Content>{children}</Content>
        <Footer />
      </Container>
    </ThemeProvider>
  </>
);
