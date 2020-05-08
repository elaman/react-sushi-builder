import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";

export default () => {
  const history = useHistory();
  const location = useLocation();

  const query = new URLSearchParams(location.search);
  let price = 0;
  let ingredients = {};
  query.forEach((value, key) => {
    if (key === "price") {
      price = +value;
    } else {
      ingredients[key] = +value;
    }
  });

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
