import React, { Component } from 'react';
import Filter from './Filter';
import GamesCard from './GamesCard';
import storage from './Store';


class Home extends Component {
 constructor(props){
  super(props);
  console.log(storage.getState().GamesList)
  this.state = {
    GamesList : storage.getState().GamesList,
    gameId : storage.getState().gameId
  }

 }

  newSetState = (mapped) =>{
    this.setState({GamesList : mapped})
  }


  render() {
  
    return (
      <div className="container">
       
        <Filter gamesData={this.state.GamesList} newSetState={this.newSetState}/>
        <GamesCard gamesData={this.state.GamesList} />
   
      </div>
    )
  }
}


export default Home;
