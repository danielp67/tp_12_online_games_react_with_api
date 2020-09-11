import React from 'react';


const TableBody = (props) => {
  const rows = props.gamesData.map((row, index) => {
    return (
      <div key={index}  className="card my-2 mx-2 pt-2 col-4">
      <a href={`games/${row.rank}`}>
        <img src={row.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{row.name}</h5>
          <p className="card-text">
          Studio : {row.studio}<br/>
          Catégorie : {row.category}<br/>
          Date de sortie : {row.releaseDate}<br/>
          Note : {row.rate}/5
          </p>
          <span className="btn btn-success">Voir plus...</span>
        
        </div>
        </a>
      </div>
    )
  })

  return <div className="row">{rows}</div>
}



const GamesCard = (props) => {
  const {gamesData} = props

  return (
      <TableBody gamesData={gamesData} />
    
  )
}




export default GamesCard