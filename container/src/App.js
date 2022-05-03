import './App.css';
import React from 'react';
import Layout from './component/layout';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './component/home';
import Order from './component/order';
import News from './component/news';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path='/order' component={Order} />
          <Route path='/news' component={News} />
        </Switch>
      </Layout>
    </Router>
  );
}


export default App;
