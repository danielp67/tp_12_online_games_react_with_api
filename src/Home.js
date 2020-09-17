import React, { Component } from 'react';
import Filter from './Filter';
import GamesCard from './GamesCard';
import storage from './Store';
import Autocomplete from './Autocomplete';
import axios from 'axios';



class Home extends Component {
 constructor(props){
  super(props);
  this.state = {
    GamesList : [],
    gameId : storage.getState().gameId,
    permittedValues : storage.getState().permittedValues
  }
  console.log(this.state)
 }

 componentDidMount() {
 this.getGames();
 console.log(this.state)
}

 getGames(){
  axios.get(`https://127.0.0.1:8000/rep`).then(res => {
    console.log(res)
    this.setState({GamesList : res.data})
    storage.setGameList(res.data)
    console.log(storage.getState())
    console.log("getGames",this.state)
})
}

  newSetState = (mapped) =>{
    this.setState({GamesList : mapped})
    console.log(mapped)
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
