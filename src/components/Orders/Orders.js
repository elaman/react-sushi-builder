import React, { useEffect } from "react";
import axios from "../../axios";
import Order from "./Order/Order";
import classes from "./Orders.module.css";
import withAxios from "../../hoc/withAxios/withAxios";
import Spinner from "../UI/Spinner/Spinner";
import { load } from "../../store/actions/orders";
import { useDispatch, useSelector } from "react-redux";

export default withAxios(() => {
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.orders);
  const { token } = useSelector(state => state.auth);

  useEffect(() => {
    load(dispatch, token);
  }, [dispatch]);

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
