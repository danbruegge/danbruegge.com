import React, { FC } from "react";
import styled from "styled-components";

import { Article } from "components/Article";
import { ArticleTitle } from "components/ArticleTitle";
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

export const About: FC<Props> = ({ socialLinks }) => (
  <FlexArticle>
    <Image src="/images/me.jpg" alt="Me" />
    <Desciption>
      <ArticleTitle>Me</ArticleTitle>
      <p>
        {
          "Hi, i'm Daniel Brüggemann a Freelance Software developer from Nennhausen/Berlin Germany."
        }
      </p>
      <ArticleTitle>Social</ArticleTitle>
      <ul>
        {socialLinks.map((link: SocialLink) => (
          <li key={link.url}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </Desciption>
  </FlexArticle>
);
