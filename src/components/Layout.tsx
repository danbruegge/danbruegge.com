import React, { FC } from "react";
import { ThemeProvider } from "styled-components";

import { breakpoints, light } from "theme";

import { Head } from "./Head";
import { Container } from "./Container";
import { Header } from "./Header";
import { Content } from "./Content";
import { PageTitle } from "components/PageTitle";

const currentTheme = {
  breakpoints,
  ...light
};

interface Props {
  title: string;
}

export const Layout: FC<Props> = ({ children, title }) => (
  <>
    <Head title={title} />
    <ThemeProvider theme={currentTheme}>
      <Container>
        <Header />
        <Content>
          <PageTitle>{title}</PageTitle>
          {children}
        </Content>
      </Container>
    </ThemeProvider>
  </>
);
