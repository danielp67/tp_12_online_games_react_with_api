import React from 'react';
import { useParams } from 'react-router-dom';



const SelectedGame = (props)=>{
 
let  {gameId}= useParams();

let selectedGame = props.gamesData[gameId-1];

    return (  

      <div key={gameId}  className="card my-2 mx-2 pt-2">
     
        <img src={`../${selectedGame.img}`} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{selectedGame.name}</h5>
          <p className="card-text">
          Studio : {selectedGame.studio}<br/>
          Catégorie : {selectedGame.category}<br/>
          Date de sortie : {selectedGame.releaseDate}<br/>
          Note : {selectedGame.rate}/5<br/>
          Nombre d'exemplaires vendus : {selectedGame.copiesSold}<br/>
          Plateformes compatibles : {selectedGame.plateformes}<br/>
          </p>
        
        </div>
      </div>
    )
        

}


export default SelectedGame