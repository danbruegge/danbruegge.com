import * as React from "react";
import styled from "styled-components";

import { Article } from "components/Article";
import { Link } from "components/Link";

import { SocialLink, Props } from "./types";

const FlexArticle = styled(Article)`
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

const Desciption = styled.div`
  flex: 3;
`;

export const About = ({ socialLinks }: Props): JSX.Element => (
  <FlexArticle>
    <Image src="/images/me.jpg" alt="Me" />
    <Desciption>
      <h2>Me</h2>
      <p>
        {
          "Hi, i'm Daniel Brüggemann a Freelance Software developer from Nennhausen."
        }
      </p>
      <h2>Social</h2>
      <ul>
        {socialLinks.map(
          (link: SocialLink): JSX.Element => (
            <li key={link.url}>
              <Link to={link.url}>{link.name}</Link>
            </li>
          )
        )}
      </ul>
    </Desciption>
  </FlexArticle>
);
