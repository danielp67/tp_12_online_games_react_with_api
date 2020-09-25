import React from 'react';
import {ThemeContext} from './ThemeContext';
import { Link } from 'react-router-dom';


const SelectedGame = (props)=>{
   
  const selectedGame = props.gamesData;

  let category = '';
  for(let i = 0; i <selectedGame.category.length; i++){
    if(i === selectedGame.category.length-1){
      category += selectedGame.category[i]["name"]
    }else{
      category += selectedGame.category[i]["name"] + ", "
    }
    }

    
     return (
      <ThemeContext.Consumer>
      {({theme}) => (
      <div style={{backgroundColor: theme.divBackground, color : theme.divColor}}   className="card my-2 mx-2 mt-5">
      <img src={`https://127.0.0.1:8000/game/img/${selectedGame.id}`} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{selectedGame.name}</h5>
      <p className="card-text">
      Studio : {selectedGame.studio.name}<br/>
      Catégorie : {category}<br/>
      <Links selectedGame={selectedGame.category}/>
      Date de sortie : {selectedGame.releaseAt}<br/>
      Note : {selectedGame.rate}/5<br/>
      Nombre d'exemplaires vendus : {selectedGame.copiesSold}<br/>
      Plateformes compatibles : {selectedGame.plateformes}<br/>
      </p>
    </div>
    </div>
    )}
      </ThemeContext.Consumer>
     ) 

  }




const Links = (props) =>{
console.log(props)
  const rows = props.selectedGame.map((row, index) => {
    console.log(row, index);
    return (
    
      <Link key={index} to={`/category/${row.id}`}> {row.name}</Link>

    )

  })

  return <span>{rows}</span>
}

  
  export default SelectedGame