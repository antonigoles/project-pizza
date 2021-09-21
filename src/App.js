import './App.css';
import MainPage from './MainPage/MainPage';
import React from "react";
import NotFound from './Common/Errors/NotFound';
import CheckoutPage from './CheckoutPage/CheckoutPage';
import { Animated } from "react-animated-css";

import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Animated animationIn="fadeIn" animationOut="fadeOut">
              <title>Home | Pizza Project</title>
              <MainPage /> 
            </Animated>
          </Route>
          <Route exact path="/checkout">
            <Animated animationIn="fadeIn" animationOut="fadeOut">
              <title>Checkout | Pizza Project</title>
              <CheckoutPage />
            </Animated>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
