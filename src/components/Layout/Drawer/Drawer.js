import React from 'react';
import classes from './Drawer.module.css';
import Logo from '../../UI/Logo/Logo';
import Navigation from '../../UI/Navigation/Navigation';

export default () => (
  <div className={classes.Drawer}>
    <Logo />
    <Navigation />
  </div>
);