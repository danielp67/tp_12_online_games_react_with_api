import React, { Component } from 'react';
import Filter from './Filter';
import GamesCard from './GamesCard';
import storage from './Store';
import Autocomplete from './Autocomplete';


class Home extends Component {
 constructor(props){
  super(props);
  this.state = {
    GamesList : storage.getState().GamesList,
    gameId : storage.getState().gameId
  }
 }

  newSetState = (mapped) =>{
    this.setState({GamesList : mapped})
  }

  searchName = () => {
    this.setState({GamesList :storage.filterName()})
  }

  render() {
  
    return (
      <div className="container">
       
        <Filter gamesData={this.state.GamesList} newSetState={this.newSetState}/>
        
          <Autocomplete gamesData={this.state.GamesList} newSetState={this.newSetState} searchName ={this.searchName} />
          

        <GamesCard gamesData={this.state.GamesList} />
   
      </div>
    )
  }
}


export default Home;
