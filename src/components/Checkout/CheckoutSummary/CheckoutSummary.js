import React from "react";
import { Route } from "react-router-dom";
import SushiKit from "../../SushiBuilder/SushiKit/SushiKit";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ price, ingredients, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <SushiKit price={price} ingredients={ingredients} />

      <Route path="/checkout" exact>
        <Button click={checkoutCancel} red>
          Cancel
        </Button>
        <Button click={checkoutContinue} green>
          Continue
        </Button>
      </Route>
    </div>
  );
};
