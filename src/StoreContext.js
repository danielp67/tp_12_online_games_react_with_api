import GamesList from './gameslist.json';
import axios from 'axios';
import React, {createContext, useState, Component} from 'react';
import Game from './Game';

export const StoreContext = React.createContext() ;

class StoreCont extends Component{
  constructor(props){
    super(props);
    this.state = {
      GamesList : [],
      gameId :'',
      permittedValues : [],
      loading : false,
      error: null
    }
   }
  

   componentDidMount() {
   this.fetch()
  }

  
  fetch = async () => {
    this.setState({loading : true});
    try{
      const GamesList = await axios.get(`https://127.0.0.1:8000/rep`).then(res => 
      res.data );
      this.setState({GamesList : GamesList, loading : false})
      console.log(this.state)
    }catch(error){
      this.setState({error, loading : false})
    }
  }
  
  
}

export default StoreCont;

