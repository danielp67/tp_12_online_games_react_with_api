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


export default function App() {
  


  return (
    <Router>
        <Nav />
        <Switch>
          <Route path="/home" exact component={Home}/>
          <Route path="/about" component={About} />
          <Route path="/games/:gameId"  component={Game} />
        </Switch>
    </Router>
  );
}



function About() {
  return <h2>About</h2>;
}
