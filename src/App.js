import React from 'react';
import './App.css';
import Category from './app/Category';
import Home from './app/Home.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return ( 
    <Router>
      <Switch>
        <Route path="/:category">
          <Category />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}


export default App;
