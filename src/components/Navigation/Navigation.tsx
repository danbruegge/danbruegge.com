import React, { FC } from "react";

import { Navigation as Props } from "./types";
import { ItemLink } from "./ItemLink";

const spacer = <span>&nbsp;/&nbsp;</span>;

export const Navigation: FC<Props> = ({
  links,
  linkElement: Link = ItemLink
}) => (
  <nav>
    {links.map((item, index) => (
      <React.Fragment key={item.name}>
        <Link to={item.url}>{item.name}</Link>
        {links.length > index + 1 && spacer}
      </React.Fragment>
    ))}
  </nav>
);
