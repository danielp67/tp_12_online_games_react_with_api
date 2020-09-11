import React, {Component} from 'react'


class Form extends Component {
 initialState = {
      gameId : this.props.gameId,
      author: '',
      comment: '',
      rate: '',
      date :'',
    }

  state = this.initialState
 
  
  handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value,
    })
    let d = new Date();
    let n = d.toLocaleString();    
    this.setState({
      date: n
    })
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
        <div className="form-group">
          <input type="button" value="Submit" onClick={this.submitForm} />
        </div>
      </form>
    );
  }


}

export default Form;
