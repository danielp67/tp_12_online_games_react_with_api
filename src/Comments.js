import React, {Component} from 'react'


class Comments extends Component {
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
      <form>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          id="author"
          value={author}
          onChange={this.handleChange} />
        <label htmlFor="job">Comment</label>
        <input
          type="text"
          name="comment"
          id="comment"
          value={comment}
          onChange={this.handleChange} />
          <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }


}

export default Comments;
