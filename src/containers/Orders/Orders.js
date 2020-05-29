import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Order from "../../components/Orders/Order/Order";
import classes from "./Orders.module.css";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";

export default withErrorHandler(() => {
  const [orders, setOrders] = useState(false);

  useEffect(() => {
    axios
      .get("/orders.json")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {});
  }, []);

  let ordersOutput = <Spinner />;
  if (orders) {
    ordersOutput = Object.keys(orders).map((id) => (
      <Order key={id} {...orders[id]} />
    ));
  }
  if (orders === null) {
    ordersOutput = <h3>No orders found</h3>;
  }

  return (
    <div className={classes.Orders}>
      <h1>Orders</h1>
      {ordersOutput}
    </div>
  );
}, axios);
