import React from 'react';
import classes from './Modal.module.css';

export default ({ children }) => (
  <div className={classes.Modal}>
    {children}
  </div>
);