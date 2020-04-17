import React from 'react';
import classes from './Drawer.module.css';
import Logo from '../../UI/Logo/Logo';
import Navigation from '../../UI/Navigation/Navigation';
import Backdrop from '../../UI/Backdrop/Backdrop';

export default () => (
  <div className={classes.Drawer}>
    <Backdrop show />
    <div className={classes.content}>
      <Logo />
      <Navigation />
    </div>
  </div>
);