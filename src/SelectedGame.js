import React from 'react';


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
      <div   className="card my-2 mx-2 pt-2">
      <img src={`../${selectedGame.img}`} className="card-img-top" alt="..." />
      <div className="card-body">
      <h5 className="card-title">{selectedGame.name}</h5>
      <p className="card-text">
      Studio : {selectedGame.studio.name}<br/>
      Catégorie : {category}<br/>
      Date de sortie : {selectedGame.releaseAt}<br/>
      Note : {selectedGame.rate}/5<br/>
      Nombre d'exemplaires vendus : {selectedGame.copiesSold}<br/>
      Plateformes compatibles : {selectedGame.plateformes}<br/>
      </p>
    </div>
    </div>
     ) 

  }
  
  export default SelectedGame