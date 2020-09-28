import React from 'react';
import axios from 'axios';

class NewGame extends React.Component {
  initialState = {
    name: 'Test',
    img :'',
    releaseAt : 2020,
    plateformes : 'toutes',
    copiesSold :'10 millions',
    rank : 50,
    rate: 4,
    studioId: 1 ,
    category:[]
  }

state = this.initialState


handleChange = (event) => {
  const {name, value} = event.target
  this.setState({ [name]: value })
  console.log(this.state)

}

handleChangeFile = (event) => {

  this.setState({ img: event.target.files[0] })
  console.log(this.state)

}

handleCheck = (event) => {
  console.log(event.target.checked)
	let	inputs = document.querySelectorAll('input[name=category]');
  console.log(inputs)
  let value=[];
  for (let i = 0; i < inputs.length; i++) {
      if(inputs[i].checked){
          console.log(i)
        value.push(inputs[i].value)
      }
    }
    console.log(value)
    this.setState({ category: value })

}


submitForm = (event) => {
this.handleChange(event)
this.handleCheck(event)

console.log(this.state)

  //this.setState(this.initialState)
 this.addGame();
}


    addGame =() => {

      const form = document.querySelector('form');
      let formData = new FormData(form);
      formData.append('file', this.state.img);
      let data = JSON.stringify(this.state);
      formData.append('data', data);

      console.log(formData);
      console.log(data);

     axios.post(`https://127.0.0.1:8000/game/new`, formData, {headers:{'Content-Type': 'multipart/form-data'}})
     .then(res => {
      if(res.status === 200){
        console.log("addGame",res)
      }else {
          console.log("error comment");
      }
     })

     
   }


  render() {
    // L’état local entier est passé au fournisseur
    return (
      <div className="row">
       <div className="col-8 offset-2">
      <form method="POST" action="" encType="multipart/form-data">
        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="name">Nom du jeu</label>
        <input type="text"  className="col-9 form-control" name="name" id="name"  onChange={this.handleChange}  required/>
        </div>
        
        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="releaseAt">Date de sortie</label>
        <input type="number" className="col-9 form-control" name="releaseAt" id="releaseAt"  onChange={this.handleChange}  required/>
        </div>

        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="plateformes">Plateformes</label>
        <input type="text" className="col-9 form-control" name="plateformes" id="plateformes"  onChange={this.handleChange}   required/>
        </div>

        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="copiesSold">Nombre d'exemplaires vendus</label>
        <input type="text" className="col-9 form-control" name="copiesSold" id="copiesSold"  onChange={this.handleChange} required/>
        </div>

        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="rank">Classement</label>
        <input type="number" className="col-9 form-control" name="rank" id="rank"  onChange={this.handleChange}  required/>
        </div>

        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="rate">Rate</label>
                
          <div className="half-stars-example">
              <div className="rating-group">
                  <input className="rating__input rating__input--none" name="rate" id="rating2-0" value="0"  type="radio" onChange={this.handleChange}/>
                  <label aria-label="0 stars" className="rating__label" htmlFor="rating2-0">&nbsp;</label>
                  <label aria-label="0.5 stars" className="rating__label rating__label--half" htmlFor="rating2-05"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-05" value="0.5" type="radio" onChange={this.handleChange}/>
                  <label aria-label="1 star" className="rating__label" htmlFor="rating2-10"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-10" value="1"  type="radio" onChange={this.handleChange}/>
                  <label aria-label="1.5 stars" className="rating__label rating__label--half" htmlFor="rating2-15"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-15" value="1.5" type="radio" onChange={this.handleChange}/>
                  <label aria-label="2 stars" className="rating__label" htmlFor="rating2-20"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-20" value="2" type="radio" onChange={this.handleChange}/>
                  <label aria-label="2.5 stars" className="rating__label rating__label--half" htmlFor="rating2-25"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-25" value="2.5" type="radio" onChange={this.handleChange}/>
                  <label aria-label="3 stars" className="rating__label" htmlFor="rating2-30"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-30" value="3" type="radio" onChange={this.handleChange}/>
                  <label aria-label="3.5 stars" className="rating__label rating__label--half" htmlFor="rating2-35"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-35" value="3.5" type="radio" onChange={this.handleChange}/>
                  <label aria-label="4 stars" className="rating__label" htmlFor="rating2-40"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-40" value="4" type="radio" onChange={this.handleChange}/>
                  <label aria-label="4.5 stars" className="rating__label rating__label--half" htmlFor="rating2-45"><i className="rating__icon rating__icon--star fa fa-star-half"></i></label>
                  <input className="rating__input" name="rate" id="rating2-45" value="4.5" type="radio" onChange={this.handleChange} />
                  <label aria-label="5 stars" className="rating__label" htmlFor="rating2-50"><i className="rating__icon rating__icon--star fa fa-star"></i></label>
                  <input className="rating__input" name="rate" id="rating2-50" value="5" type="radio" onChange={this.handleChange} />
              </div>
          </div>
        </div>


        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="studioId">Choose a studio :</label>

        <select id="studioId" name="studioId" className="col-9 form-control">
          <option value="1" >Mojang Studios</option>
          <option value="2">Divers</option>
          <option value="3">Rockstar Games</option>
          <option value="4">Nintendo</option>
          <option value="5">PUBG</option>
          <option value="6">Activision Blizzard</option>
          <option value="7">Bethesda Softworks</option>
          <option value="8" >Re-Logic</option>
        </select>

        </div>

        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="category">Catégorie</label>
        <div className="col-9">
        <label htmlFor="category col-2 ">
        <input type="checkbox" className="form-control" name="category" value="1" onChange={this.handleCheck}/>
           Aventure</label>
        <label htmlFor="category col-2 ">
          <input type="checkbox"  className="form-control"  name="category" value="2" onChange={this.handleCheck}/>
          Action</label>
          <input type="checkbox" className="col-2 form-control" name="category" value="3" onChange={this.handleCheck} />
          <label htmlFor="category">Bac à sable</label>
          <input type="checkbox" className="col-2 form-control" name="category" value="4" onChange={this.handleCheck} />
          <label htmlFor="category">Battle royale</label>
          <input type="checkbox" className="col-2 form-control" name="category" value="5" onChange={this.handleCheck} />
          <label htmlFor="category">Construction</label>
          </div>
        </div>


        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="img">Fichier</label>
        <input type="file" className="" name="img" files="" accept="image/png, image/jpeg" onChange={this.handleChangeFile} required />
        </div>
        <div className="form-group row">
          <input className="btn btn-success col-6" type="button" value="Envoyer" onClick={this.submitForm} />
        </div>


      </form>
    </div>
  </div>
    );
  }
}




export default NewGame;
