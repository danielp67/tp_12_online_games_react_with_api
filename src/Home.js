import React, { Component } from 'react';
import Table from './Table';
import Form from './Form';
import Filter from './Filter';
import GamesTable from './GamesTable';
import GamesCard from './GamesCard';
import FilterableProductTable from './Store';
import PRODUCTS from './store.json';
import GamesList from './gameslist.json';


class Home extends Component {

  state = {
    characters: [],
  }

  removeCharacter = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  getComments = (index) => {
    const {characters} = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }


  render() {
    const { characters } = this.state
  
    return (
      <div className="container">
        <Filter handleSubmit={this.handleSubmit} />
        <GamesCard gamesData={GamesList} getComments={this.getComments} />

         <FilterableProductTable products={PRODUCTS} />
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
        <Form handleSubmit={this.handleSubmit} />
        <GamesTable gamesData={GamesList} getComments={this.getComments} />
        <Form handleSubmit={this.handleSubmit} />

      </div>
    )
  }


  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }



}


export default Home;
