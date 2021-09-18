import './App.css';
import MainPage from './MainPage/MainPage';
import React from "react";
import {
  Route, BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/">
          <MainPage/> 
        </Route>
      </Router>
    </div>
  );
}

export default App;
