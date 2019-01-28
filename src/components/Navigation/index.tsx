import React from "react";
import PropTypes from "prop-types";

import ItemLink from "./ItemLink";

const spacer = <span>&nbsp;/&nbsp;</span>;

const Navigation = ({ links, linkElement: Link }) => (
  <nav>
    {links.map((item, index) => (
      <>
        <Link key={item.url} to={item.url}>
          {item.name}
        </Link>
        {links.length > index + 1 && spacer}
      </>
    ))}
  </nav>
);

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string
    })
  ).isRequired,
  linkElement: PropTypes.func
};

Navigation.defaultProps = {
  linkElement: ItemLink
};

export default Navigation;
