import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./Nav.module.css";

export default () => (
  <ul className={classes.Nav}>
    <NavItem url="/builder">Sushi Builder</NavItem>
    <NavItem url="/checkout">Checkout</NavItem>
  </ul>
);
