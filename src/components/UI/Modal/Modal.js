import React from "react";
import classes from "./Modal.module.css";

export default ({ children, show }) => {
  const modalClasses = [classes.Modal];
  if (show) {
    modalClasses.push(classes.show);
  }

  return <div className={modalClasses.join(" ")}>{children}</div>;
};
