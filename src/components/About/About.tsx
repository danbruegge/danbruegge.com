import * as React from "react";

import { Link } from "components/Link";

import { SocialLink, Props } from "./types";

export const About = ({ socialLinks }: Props): JSX.Element => (
  <>
    <h2>Social</h2>
    <ul>
      {socialLinks.map((link: SocialLink) => (
        <li key={link.url}>
          <Link to={link.url}>{link.name}</Link>
        </li>
      ))}
    </ul>
  </>
);
