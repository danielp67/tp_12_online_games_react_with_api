import React, { Component, useContext } from 'react';
import Filter from './Filter';
import GamesCard from './GamesCard';
import storage from './Store';
import Autocomplete from './Autocomplete';
import axios from 'axios';
import {StoreContext} from './StoreContext';


class Home extends Component {
 
  constructor(props){
  super(props);
  this.state = {
    GamesList : [],
    GamesListFilter : [],
    gameId : storage.getState().gameId,
    permittedValues : storage.getState().permittedValues,
    loading : false,
    error: null
  }
  console.log(this.state)
  console.log('StoreContext', StoreContext)
 }

 static contextType = StoreContext;

 componentDidMount() {
 this.getGames();
}

 getGames =() => {
  axios.get(`https://127.0.0.1:8000/home`).then(res => {
    this.setState({GamesList : res.data, GamesListFilter : res.data})  
})
console.log("getGames",this.state)
}

handleChange = (mapped) =>{
    this.setState({GamesListFilter : mapped})
  }

searchName = (filterName) => {
    this.setState({GamesListFilter :filterName})
  }

  render() {
    if(this.state.GamesList != null){

      return (
      <div className="container">   
        <Filter gamesData={this.state.GamesListFilter} handleChange={this.handleChange} />
        <Autocomplete gamesData={this.state.GamesList}  searchName ={this.searchName} />
        <GamesCard gamesData={this.state.GamesListFilter} />
      </div>
    )
  }else{
    return <h5 className="card-title">wait... </h5>
    }
  }
}


export default Home;
