import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import SushiBuilder from "./containers/SushiBuilder/SushiBuilder";
import Checkout from "./containers/Checkout/Checkout";
import "./App.css";

export default () => {
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
        </Switch>
      </Layout>
    </div>
  );
};
