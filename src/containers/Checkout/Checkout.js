import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Route } from "react-router-dom";
import axios from "../../axios";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

export default withErrorHandler(() => {
  const history = useHistory();
  const location = useLocation();
  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const newIngredients = {};
    query.forEach((value, key) => {
      if (key === "price") {
        setPrice(+value);
      } else {
        newIngredients[key] = +value;
      }
    });
    setIngredients(newIngredients);
  }, []);

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/form");
  }

  function checkoutFinish(data) {}

  return (
    <div className={classes.Checkout}>
      <CheckoutSummary
        ingredients={ingredients}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
      <Route path="/checkout/form">
        <CheckoutForm checkoutFinish={checkoutFinish} />
      </Route>
    </div>
  );
}, axios);
