import React from "react";
import Layout from "./containers/Layout/Layout";
import SushiBuilder from "./containers/SushiBuilder/SushiBuilder";
import Checkout from "./containers/Checkout/Checkout";
import "./App.css";

export default () => {
  return (
    <div className="App">
      <Layout>
        <SushiBuilder />
        <Checkout />
      </Layout>
    </div>
  );
};
