import React, { Component } from 'react';

class UpdateWordCountForm extends Component {
  state = {
    wordcount: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //the part where wordcount gets submitted somewhere!
    console.log(this.state.wordcount)
    this.setState({
      wordcount: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Update Word Count (please enter the number of words you wish to add):</label>
        <input id="wordcount" type="number" min="1" name="wordcount" onChange={this.handleChange} value={this.state.wordcount}/>
        <input type="submit"/>
      </form>
    );
  }
}

export default UpdateWordCountForm;

