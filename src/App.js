import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import SushiBuilder from './containers/SushiBuilder/SushiBuilder';

export default () => {
  return (
    <div className="App">
      <Layout>
        <SushiBuilder />
      </Layout>
    </div>
  );
};
