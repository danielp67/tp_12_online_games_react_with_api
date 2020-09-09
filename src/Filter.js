import React, {Component} from 'react'


class Filter extends Component {
  initialState = {
    Author: '',
    Comment: '',
  }

  state = this.initialState

  handleChange = (event) => {
    const {name, value} = event.target
  
    this.setState({
      [name]: value,
    })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }


  render() {
    const { author, comment } = this.state;
  
    return (
       <div class="form row mx-5 my-5">
        <form>
          <button class="btn btn-success mx-2  my-2" type="button" onClick={this.submitForm}>Trier par Nom ↓</button>
          <button class="btn btn-danger mx-2 my-2" type="button" onClick={this.submitForm} >Trier par Nom Décroissant ↑</button>
          <button  class="btn btn-success mx-2 my-2" type="button"  onClick={this.submitForm} >Trier par Date ↓</button>
          <button  class="btn btn-danger mx-2 my-2" type="button"  onClick={this.submitForm} >Trier par Date Décroissante ↑</button>
          <button  class="btn btn-success mx-2 my-2" type="button" onClick={this.submitForm} >Trier par Note ↓</button>
          <button  type="button" class="btn btn-danger mx-2 my-2" onClick={this.submitForm} >Trier par Note Décroissante ↑</button>
          <button  class="btn btn-info mx-2 my-2" type="button" onClick={this.submitForm} >Trier par Défaut</button>
          <div class="form-inline">
          <input class="form-control mr-sm-2" type="search" placeholder="Rechercher un jeu" aria-label="Search"/>
          <button class="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
          </div>  
        </form>
      </div>  
    );
  }


}

export default Filter;
