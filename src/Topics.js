import React, { Component } from 'react';
import Form from './Form';
import SelectedGame from './SelectedGame';
import GamesList from './gameslist.json';


class Topics extends Component {
  constructor(props){
    super(props);
   
  }

  render() { 
    const gameId = this.props;
    return (
      <div className="container">
        <h3>Requested topic ID: {gameId}</h3>
      </div>
    )
  }
}


export default Topics;
