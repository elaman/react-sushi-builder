import React from "react";
import SushiKit from "../../SushiBuilder/SushiKit/SushiKit";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ price, ingredients }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <SushiKit price={price} ingredients={ingredients} />
      <Button red>Cancel</Button>
      <Button green>Continue</Button>
    </div>
  );
};
