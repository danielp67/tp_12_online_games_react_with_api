import React, { Component } from 'react';
import Form from './Form';
import SelectedGame from './SelectedGame';
import storage from './Store';
import Comments from './Comments';



class Game extends Component{
  constructor(props){
    super(props);
    console.log(this.props.match.params.gameId)
    console.log(storage.getState())
    this.state = {
      GamesList : storage.getState().GamesList,
      gameId : this.props.match.params.gameId,
      characters: storage.getState().characters,
      commentByGame : []

    }
    this.commentFilter()
    console.log(this.state)
   }


  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character],
                commentByGame: [...this.state.commentByGame, character]},
                this.saveStateToLocalStorage
      )  
  }


  saveStateToLocalStorage = () => {
    localStorage.setItem('stateComment', JSON.stringify(this.state.characters))
  }

 
  commentFilter = () => {
    console.log(storage.getState())
        for (let i = 0; i < this.state.characters.length; i++) {
          console.log(this.state.characters[i].gameId)
          console.log(this.state.gameId)
                 
          if (this.state.characters[i].gameId ==  this.state.gameId) {
            this.state.commentByGame.push(this.state.characters[i]);
                console.log(this.state.commentByGame)
              }
        }
  } 


 
  render() {
    const { commentByGame, GamesList } = this.state
    return (
      <div className="container">
      <div className="row">
     <div className="col-6 offset-3">
      <SelectedGame gamesData={GamesList} newSetState={this.newSetState}/>
      <Comments characterData={commentByGame} removeCharacter={this.removeCharacter} />
      <Form gameId={this.state.gameId} handleSubmit={this.handleSubmit} />
      </div>
      </div>
      </div>
    )
  }


} 


export default Game;
