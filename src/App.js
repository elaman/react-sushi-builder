import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import SushiBuilder from "./containers/SushiBuilder/SushiBuilder";
import Checkout from "./components/Checkout/Checkout";
import Orders from "./components/Orders/Orders";
import Auth from "./components/Auth/Auth";
import Logout from "./components/Logout/Logout";
import "./App.css";
import { restore } from "./store/actions/auth";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();
  useEffect(() => restore(dispatch));

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <SushiBuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};
