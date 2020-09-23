import React, { Component } from 'react';
import Filter from './Filter';
import GamesCard from './GamesCard';
import storage from './Store';
import Autocomplete from './Autocomplete';
import axios from 'axios';
import {StoreContext} from './StoreContext';
import {ThemeContext} from './ThemeContext';


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
        <ThemeContext.Consumer>
        {({theme}) => (
          <div className="container-fluid" style={{backgroundColor: theme.background, color:theme.color}}>
          <div className="row">
          <div className="col-10 offset-2">
        <Filter gamesData={this.state.GamesListFilter} handleChange={this.handleChange} />
        <Autocomplete gamesData={this.state.GamesList}  searchName ={this.searchName} />
        <GamesCard gamesData={this.state.GamesListFilter} />
      </div>
      </div>
      </div>
      )}
      </ThemeContext.Consumer>
    )
  }else{
    return (
      <ThemeContext.Consumer>
      {({theme}) => (
        <div className="" style={{backgroundColor: theme.background, color:theme.color}}>
        <h5 className="card-title">wait... </h5>
        </div>
      )}
      </ThemeContext.Consumer>
    )
    }
  }
}


export default Home;
