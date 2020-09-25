import React from 'react';
import axios from 'axios';

class NewGame extends React.Component {
  initialState = {
    gameId : this.props.gameId,
    name: '',
    comment: '',
    rate: '',
    createAt :'',
    width: 0,
  }

state = this.initialState


handleChange = (event) => {

  const {name, value} = event.target
  this.setState({ [name]: value })

  console.log(this.state)
  let date = new Date();
  date.setHours( date.getHours() + 2 )
  let n = date.toISOString().slice(0, 19).replace('T', ' ');
  this.setState({createAt: n})
}

submitForm = () => {
  this.props.handleSubmit(this.state)
  this.setState(this.initialState)
}

  componentDidMount() {
   // this.getGames();
   const ratings = 1;
   // total number of stars
   const starTotal = 5;
   
   let doc = document.querySelector(".stars-inner") ;
   
   console.log(doc)
   
   
     const starPercentage = ratings / starTotal * 70;
    // const starPercentageRounded = Math.round(starPercentage / 10) * 7.4;
    // doc.style.width = starPercentageRounded;
    this.setState({width : starPercentage})

      console.log(starPercentage)
   }
   
    getGames =() => {
     axios.get(`https://127.0.0.1:8000/home`).then(res => {
       this.setState({GamesList : res.data, GamesListFilter : res.data})  
   })
   console.log("getGames",this.state)
   }

  render() {
    // L’état local entier est passé au fournisseur
    return (
      <form>
        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="name">Titre du jeu</label>
        <input type="text"  className="col-9 form-control" name="name" id="name"  onChange={this.handleChange} required/>
        </div>
        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="comment">Comment</label>
        <input type="text" className="col-9 form-control" name="comment" id="comment"  onChange={this.handleChange} required/>
        </div>
        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="rate">Rate</label>
        <input type="number" className="col-2 form-control" name="rate" id="rate" min="1" max="5" value="" onChange={this.handleChange} required />  /5
        </div>
        <div className="form-group row">
          <input className="btn btn-success col-6" type="button" value="Envoyer" onClick={this.submitForm} />
        </div>



<div id="half-stars-example">
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

<div className="hotel_e">
  
        <div className="stars-outer">
          <div className="stars-inner" style={{width : this.state.width}}></div>
        </div>
     
    </div>


 
      </form>
    );
  }
}




export default NewGame;
