import React from "react";
import classes from "./Button.module.css";

export default ({ children, click, enabled }) => {
  enabled = enabled === undefined ? true : enabled;

  return (
    <button onClick={click} className={classes.Button} disabled={!enabled}>
      {children}
    </button>
  );
};
