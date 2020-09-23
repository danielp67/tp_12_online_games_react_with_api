import React from 'react';
import axios from 'axios';
import GamesCard from './GamesCard';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GamesList : [],
      GamesListFilter : [],
    };
  }

  componentDidMount() {
    this.getGames();
   }
   
    getGames =() => {
     axios.get(`https://127.0.0.1:8000/home`).then(res => {
       this.setState({GamesList : res.data, GamesListFilter : res.data})  
   })
   console.log("getGames",this.state)
   }

  render() {
    // L’état local entier est passé au fournisseur
    return (
    
       <GamesCard gamesData={this.state.GamesListFilter} />

    );
  }
}



export default About;
