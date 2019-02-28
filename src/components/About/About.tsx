import * as React from "react";
import styled from "styled-components";

import { Article } from "components/Article";
import { Link } from "components/Link";

import { SocialLink, Props } from "./types";

export const About = ({ socialLinks }: Props): JSX.Element => (
  <>
    <Article>
      <h2>Me</h2>
      <p>{"Hej i'm Daniel Brüggemann, Freelance Software-Developer."}</p>
    </Article>
    <Article>
      <h2>Social</h2>
      <ul>
        {socialLinks.map((link: SocialLink) => (
          <li key={link.url}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </Article>
  </>
);
