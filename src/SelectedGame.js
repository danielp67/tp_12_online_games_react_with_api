import React from 'react';


const TableBody = (props) => {
  const rows = props.gamesData.map((row, index) => {
    return (
      <div key={index}  class="card my-2 mx-2 pt-2 col-4">
      
        <img src={row.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{row.name}</h5>
          <p class="card-text">
          Studio : {row.studio}<br/>
          Catégorie : {row.category}<br/>
          Date de sortie : {row.releaseDate}<br/>
          Note : {row.rate}/5
          </p>
        </div>

      </div>
    )
  })

  return <div class="row">{rows}</div>
}



const SelectedGame = (props) => {
  const {gamesData} = props

  return (
    
      <TableBody gamesData={gamesData}/>
    
  )
}




export default SelectedGame