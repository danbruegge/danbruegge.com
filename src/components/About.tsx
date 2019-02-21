import * as React from "react";

import { Link } from "components/Link";

interface SocialLink {
  name: string;
  url: string;
}

export interface Props {
  socialLinks: SocialLink[];
}

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
