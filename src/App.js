import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home';
import Nav from './Nav';
import Game from './Game';
import {StoreContext, store} from './StoreContext';


export default function App() {


console.log(StoreContext)

  return (
    <Router>
        <Nav />
        <Switch>
        <StoreContext.Provider>
          <Route path="/home" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/game/:gameId"  component={Game} />
          </StoreContext.Provider>

        </Switch>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}
