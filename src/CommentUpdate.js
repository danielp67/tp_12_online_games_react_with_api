import React from 'react';
import {ThemeContext} from './ThemeContext';

const CommentsHeader = () => {
    return (
     <h3  className="text-center my-3">
       Votre Commentaire
     </h3> 
    )
  }


  const CommentsList = (props) => {
    const rows = props.commentsData.map((row, index) => {
      return (
        <ThemeContext.Consumer>
        {({theme}) => (
          <div key={index} style={{backgroundColor: theme.divBackground}}  className="card my-2 mx-2">
              
               <div className="card-header">
                  <div className="row">
                      <div className="col-9">
                      De : {row.author} <br/>
                      le : {row.createAt}
                      </div>

                      <div className="col-3 text-right">
                      Note : {row.rate}/5
                      </div>
                  </div>
               </div>
               <div className="card-body">
            <p className="card-text text-center">
                {row.comment}<br/>
            </p>
          </div>
          <div className="card-footer">
            <div className="row">
            <button className="btn btn-danger col-4 offset-4" onClick={() => 
            props.removeComment(row.id)}>Delete</button>
           
            </div>
          </div>
        </div>
        )}
      </ThemeContext.Consumer>
      )
    })
  
    return <div className="col-12">{rows}</div>
  }


  const CommentUpdate = (props) => {
    const {commentsData, removeComment} = props
  
    return (
      <div >
        <CommentsHeader />
        <CommentsList commentsData={commentsData} removeComment={removeComment}  />
      </div>
    )
  }



export default CommentUpdate