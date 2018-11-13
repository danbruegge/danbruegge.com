import React from "react";
import PropTypes from "prop-types";

import List from "./List";
import ItemLink from "./ItemLink";

const Navigation = ({ links, linkElement: Link }) => (
  <nav>
    <List>
      {links.map(item => (
        <li key={item.url}>
          <Link to={item.url}>{item.name}</Link>
        </li>
      ))}
    </List>
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
