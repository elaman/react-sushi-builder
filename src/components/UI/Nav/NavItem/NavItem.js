import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

export default ({ children, url }) => (
  <li className={classes.NavItem}>
    <NavLink to={url} activeClassName={classes.active} exact>
      {children}
    </NavLink>
  </li>
);
