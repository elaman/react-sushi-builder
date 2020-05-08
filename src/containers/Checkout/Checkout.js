import React from "react";
import { useHistory } from "react-router-dom";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";

export default () => {
  const history = useHistory();
  const ingredients = {
    avocadoMaki: 1,
    avocadoTunaRoll: 1,
    californiaMaki: 1,
    californiaTunaRoll: 1,
    ikuraMaki: 1,
    salmonMaki: 1,
  };
  const price = 123;

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/finish");
  }

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        ingredients={ingredients}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    </div>
  );
};
