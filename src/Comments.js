import React from 'react';

const CommentsHeader = () => {
    return (
     <h3  className="text-center my-3">
       Vos Commentaires
     </h3> 
    )
  }


  const CommentsList = (props) => {
    const rows = props.characterData.map((row, index) => {
      return (
        <div key={index}  className="card my-2 mx-2">
              
               <div className="card-header">
                  <div className="row">
                      <div className="col-9">
                      De : {row.author} <br/>
                      le : {row.date}
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
          <button className="card-footer" onClick={() => props.removeCharacter(index)}>Delete</button>
        </div>
      )
    })
  
    return <div className="col-12">{rows}</div>
  }



  const Comments = (props) => {
    const {characterData, removeCharacter} = props
  
    return (
      <div >
        <CommentsHeader />
        <CommentsList characterData={characterData} removeCharacter={removeCharacter} />
      </div>
    )
  }



export default Comments