import * as React from "react";

import { Navigation as Props } from "./types";
import { ItemLink } from "./ItemLink";

const spacer = <span>&nbsp;/&nbsp;</span>;

export const Navigation = ({
  links,
  linkElement: Link = ItemLink
}: Props): JSX.Element => (
  <nav>
    {links.map((item, index) => (
      <React.Fragment key={item.name}>
        <Link to={item.url}>{item.name}</Link>
        {links.length > index + 1 && spacer}
      </React.Fragment>
    ))}
  </nav>
);
