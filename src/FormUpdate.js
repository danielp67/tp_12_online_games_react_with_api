import React, {Component} from 'react'
import {  Link } from "react-router-dom";


class FormUpdate extends Component {
 initialState = {
      author: '',
      comment: '',
      rate:'',
      createAt : this.props.commentsData[0].createAt,
    }

  state = this.initialState
 componentDidMount(){
   this.setState({author: this.props.commentsData[0].author,
                comment: this.props.commentsData[0].comment,
                  rate: this.props.commentsData[0].rate,
                  gameId : this.props.commentsData[0].gameId
  })
   console.log(this.initialState)
 }
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  

  render() {
    const { author, comment, rate, gameId } = this.state;
    
    return (
      <form>
        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="author">Author</label>
        <input type="text"  className="col-9 form-control" name="author" id="author" value={author} onChange={this.handleChange} disabled/>
        </div>
        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="comment">Comment</label>
        <input type="text" className="col-9 form-control" name="comment" id="comment" value={comment} onChange={this.handleChange} required/>
        </div>
        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="rate">Rate</label>
        <input type="number" className="col-2 form-control" name="rate" id="rate" min="1" max="5" value={rate} onChange={this.handleChange} required />  /5
        </div>
        <div className="form-group row">
          <input className="btn btn-success col-4 offset-1" type="button" value="Modifier" onClick={this.submitForm} />
           <Link className="btn btn-warning col-4 offset-1" style={{color: "white"}} to={`/game/${gameId}`}>Annuler</Link>
        </div>
      </form>
    );
  }


}

export default FormUpdate;
