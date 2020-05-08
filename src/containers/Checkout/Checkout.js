import React from "react";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";

export default () => {
  const ingredients = {
    avocadoMaki: 1,
    avocadoTunaRoll: 1,
    californiaMaki: 1,
    californiaTunaRoll: 1,
    ikuraMaki: 1,
    salmonMaki: 1,
  };
  const price = 123;

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary ingredients={ingredients} price={price} />
    </div>
  );
};
