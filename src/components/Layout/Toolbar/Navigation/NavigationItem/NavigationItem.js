import React from "react";
import classes from "./NavigationItem.module.css";

export default ({ children, url, active }) => (
  <li className={classes.NavigationItem}>
    <a href={url} className={active ? classes.active : null}>
      {children}
    </a>
  </li>
);
