import React, { useState } from "react";
import Toolbar from "../../components/Layout/Toolbar/Toolbar";
import Drawer from "../../components/Layout/Drawer/Drawer";
import classes from "./Layout.module.css";

export default ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className={classes.Layout}>
      <Toolbar />
      <Drawer open={drawerOpen} toggleDrawer={() => {}} />
      <main>{children}</main>
    </div>
  );
};
