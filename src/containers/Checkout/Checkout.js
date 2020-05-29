import React from "react";
import { useHistory, Route, Redirect } from "react-router-dom";
import axios from "../../axios";
import CheckoutSummary from "../../components/Checkout/CheckoutSummary/CheckoutSummary";
import classes from "./Checkout.module.css";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import withAxios from "../../hoc/withAxios/withAxios";
import Spinner from "../../components/UI/Spinner/Spinner";
import { useSelector } from "react-redux";

export default withAxios(({ loading }) => {
  const history = useHistory();
  const { ingredients, price } = useSelector(state => state.builder);

  function checkoutCancel() {
    history.push("/builder");
  }

  function checkoutContinue() {
    history.push("/checkout/form");
  }

  function checkoutFinish(data) {
    axios
      .post("/orders.json", {
        ingredients,
        price,
        details: data,
      })
      .then(() => history.replace("/"));
  }

  let formOutput = <Spinner />;
  if (!loading) {
    formOutput = <CheckoutForm checkoutFinish={checkoutFinish} />;
  }

  let summaryOutput = <Redirect to="/" />
  if (ingredients) {
    summaryOutput = (
      <CheckoutSummary
        ingredients={ingredients}
        price={price}
        checkoutCancel={checkoutCancel}
        checkoutContinue={checkoutContinue}
      />
    )
  }

  return (
    <div className={classes.Checkout}>
      {summaryOutput}
      <Route path="/checkout/form">{formOutput}</Route>
    </div>
  );
}, axios);
