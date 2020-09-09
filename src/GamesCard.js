import React, {Component} from 'react';


const TableBody = (props) => {
  const rows = props.gamesData.map((row, index) => {
    return (
      <div key={index}  class="card my-2 mx-2 pt-2 col-4">
      <a href={index} onClick={() => props.getComments(index)}>
        <img src={row.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{row.name}</h5>
          <p class="card-text">
          Studio : {row.studio}<br/>
          Catégorie : {row.category}<br/>
          Date de sortie : {row.releaseDate}<br/>
          Note : {row.rate}/5
          </p>
          <a href="#"  class="btn btn-success">Voir plus...</a>
        
        </div>
        </a>
      </div>
    )
  })

  return <div class="row">{rows}</div>
}



const GamesCard = (props) => {
  const {gamesData, getComments} = props

  return (
    
      <TableBody gamesData={gamesData} getComments={getComments} />
    
  )
}




export default GamesCard