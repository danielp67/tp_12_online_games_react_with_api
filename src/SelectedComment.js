import React, { Component } from 'react';
import FormUpdate from './FormUpdate';
import axios from 'axios';
import CommentUpdate from './CommentUpdate';
import {ThemeContext} from './ThemeContext';
import { Redirect } from "react-router-dom";


class SelectedComment extends Component{
  constructor(props){
    super(props);
    this.state = {
      commentId : this.props.match.params.commentId,
      comment : [],
      submit : false
    }
    console.log(this.props)
   }

   componentDidMount() {
   this.getComment();  
   }
   
    getComment = () => {
      const params = this.state.commentId
     axios.get('https://127.0.0.1:8000/comment/get/'+params).then(res => {
     this.setState({comment : res.data})
      console.log(res.data) 
    }  
    )}

  handleSubmit = (comment) => {
       comment = JSON.stringify(comment)
       console.log(comment)
       const params = this.state.commentId
       axios.post('https://127.0.0.1:8000/comment/update/'+params, comment, {headers:{"Content-Type" : "application/json"}})
      .then(res => {
       if(res.status === 200){
        this.setState({submit : true})
      }else {
           console.log("error comment");
       }
      })

  }

  removeComment = (commentId) => {
    axios.delete('https://127.0.0.1:8000/comment/delete/'+commentId).then(res => {
    console.log(res)
    if(res.status === 200){
      this.getGame();
     }else {
        console.log("error comment");
    }
  })
}

  render() {

    if(this.state.comment[0] != null && this.state.submit === false){
   
    return (
      <ThemeContext.Consumer>
      {({theme}) => (
      <div className="container-fluid h-100" style={{backgroundColor: theme.background, color:theme.color}}>
      <div className="row">
     <div className="col-6 offset-3">
     <CommentUpdate commentsData={this.state.comment} removeComment={this.removeComment} />
      <FormUpdate commentsData={this.state.comment} handleSubmit={this.handleSubmit} />
      </div>
      </div>
      </div>
      )}
      </ThemeContext.Consumer>
    )

    }
    if(this.state.submit === true){
      const {gameId} = this.state.comment[0];
      return <Redirect to={`/game/${gameId}`} />

    }
    else{
    return <h5 className="card-title">wait... </h5>
    }
  }


} 


export default SelectedComment;
