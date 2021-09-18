import './App.css';
import MainPage from './MainPage/MainPage';
import React from "react";
import NotFound from './Common/NotFound';

import {
  Route, BrowserRouter as Router, Switch
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <title>Home | Pizza Project</title>
            <MainPage/> 
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
