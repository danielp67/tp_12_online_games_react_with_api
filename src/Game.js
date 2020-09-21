import React, { Component } from 'react';
import Form from './Form';
import SelectedGame from './SelectedGame';
import Comments from './Comments';
import axios from 'axios';



class Game extends Component{
  constructor(props){
    super(props);
    this.state = {
      Game :[],
      Studio:{},
      Category:[],
      gameId : this.props.match.params.gameId,
      characters: [],
      commentByGame : []
    }
   }

   componentDidMount() {
    this.getGame();  
   }
   
    getGame = () => {
      const params = this.state.gameId
     axios.get('https://127.0.0.1:8000/game/'+params).then(res => {
      this.setState({Game : res.data.game[0], commentByGame : res.data.comments})
      console.log(res.data.comments)
      console.log(this.state.Game)
    }  
    )}

  handleSubmit = (comment) => {
       comment = JSON.stringify(comment)
       console.log(comment)
       const params = this.state.gameId
       axios.post('https://127.0.0.1:8000/game/'+params, comment, {headers:{"Content-Type" : "application/json"}})
      .then(res => {
        console.log(res);
       if(res.status === 200){
         this.getGame();
        }else {
           console.log("error comment");
       }
      })

  }

/*
  saveStateToLocalStorage = () => {
    localStorage.setItem('stateComment', JSON.stringify(this.state.characters))
  }

 
  commentFilter = () => {
        for (let i = 0; i < this.state.characters.length; i++) {                 
          if (this.state.characters[i].gameId ==  this.state.gameId) {
            this.state.commentByGame.push(this.state.characters[i]);
              }
        }
  } 
 */

  render() {
    if(this.state.Game.category != null){
   
    return (
      <div className="container">
      <div className="row">
     <div className="col-6 offset-3">
     <SelectedGame gamesData={this.state.Game} />
     <Comments commentsData={this.state.commentByGame} removeComment={this.removeComment} />
      <Form gameId={this.state.gameId} handleSubmit={this.handleSubmit} />
      </div>
      </div>
      </div>
    )

    }else{
    return <h5 className="card-title">wait... </h5>
    }
  }


} 


export default Game;
