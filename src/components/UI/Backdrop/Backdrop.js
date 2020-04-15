import React from "react";
import classes from "./Backdrop.module.css";

export default ({ show, hideCallback }) =>
  show ? <div onClick={hideCallback} className={classes.Backdrop}></div> : null;
