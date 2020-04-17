import React from 'react';
import classes from './DrawerToggle.module.css';

export default ({ toggleDrawer }) => (
  <div className={classes.DrawerToggle} onClick={toggleDrawer}>
    Menu
  </div>
);