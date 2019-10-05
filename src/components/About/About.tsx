import React, { FC } from "react";
import styled from "styled-components";

import { H2 } from "components/H2";
import { Section } from "components/Section";
import { Link } from "components/Link";

import { SocialLink, AboutProps } from "./types";

const Main = styled.main`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  @media (${props => props.theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

const Image = styled.img`
  border-radius: 50%;
  border: 2px solid black;
  display: block;
  flex: 1;
  height: auto;
  width: 50%;
  margin: 0 auto 2rem;

  @media (${props => props.theme.breakpoints.desktop}) {
    margin: 0 3rem 0 0;
  }
`;

const Desciption = styled.article`
  flex: 3;
`;

export const About: FC<AboutProps> = ({ socialLinks }) => (
  <Main>
    <Image src="/images/me.jpg" alt="Me" />
    <Desciption>
      <Section>
        <H2>Me</H2>
        <p>
          {
            "Hi, i'm Daniel Brüggemann a Freelance Software developer from Nennhausen/Berlin Germany."
          }
        </p>
      </Section>
      <Section>
        <H2>Social</H2>
        <ul>
          {socialLinks.map((link: SocialLink) => (
            <li key={link.url}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </Section>
    </Desciption>
  </Main>
);
