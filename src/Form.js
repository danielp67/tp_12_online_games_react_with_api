import React, {Component} from 'react'


class Form extends Component {
 initialState = {
      gameId : this.props.gameId,
      author: '',
      comment: '',
      rate: '',
      createAt :'',
    }

  state = this.initialState
 
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({ [name]: value })
    let date = new Date();
    date.setHours( date.getHours() + 2 )
    let n = date.toISOString().slice(0, 19).replace('T', ' ');
    this.setState({createAt: n})
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
  }
  

  render() {
    const { author, comment, rate } = this.state;
    
    return (
      <form>
        <div className="form-group row">
        <label className="col-3 col-form-label" htmlFor="author">Author</label>
        <input type="text"  className="col-9 form-control" name="author" id="author" value={author} onChange={this.handleChange} required/>
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
          <input className="btn btn-success col-6" type="button" value="Envoyer" onClick={this.submitForm} />
        </div>
      </form>
    );
  }


}

export default Form;
