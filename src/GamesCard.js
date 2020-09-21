import React from 'react';


const TableBody = (props) => {
  
  const rows = props.gamesData.map((row, index) => {

    let category = '';
    for(let i = 0; i <row.category.length; i++){
      if(i === row.category.length-1){
        category += row.category[i]["name"] 
      }else{
        category += row.category[i]["name"] + ", "
      }  
      }

    return (
      <div key={index}  className="card my-2 mx-2 pt-2 col-4">
      <a href={`game/${row.rank}`}>
        <img src={row.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{row.name}</h5>
          <p className="card-text">
          Studio : {row.studio.name}<br/>
          Catégorie : {category}<br/>
          Date de sortie : {row.releaseAt}<br/>
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