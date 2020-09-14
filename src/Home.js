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
    gameId : storage.getState().gameId,
    permittedValues : storage.getState().permittedValues
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
        
          <Autocomplete suggestions={this.state.permittedValues}  searchName ={this.searchName} />
          

        <GamesCard gamesData={this.state.GamesList} />
   
      </div>
    )
  }
}


export default Home;
