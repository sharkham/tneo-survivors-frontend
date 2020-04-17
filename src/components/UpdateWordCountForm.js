import React, { Component } from 'react';

class UpdateWordCountForm extends Component {
  state = {
    addedWords: "",
    wordCount: this.props.wordcount
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const updatedWordCount = this.state.wordCount + parseInt(this.state.addedWords)
    this.props.patchWordCount(this.state.wordcount)
    // console.log(updatedWordCount)
    //the part where wordcount gets submitted somewhere!
    this.setState({
      ...this.state,
      addedWords: "",
      wordCount: updatedWordCount
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Update Word Count (please enter the number of words you wish to add):</label>
        <input id="addedWords" type="number" min="1" name="addedWords" onChange={this.handleChange} value={this.state.addedWords}/>
        <input type="submit"/>
      </form>
    );
  }
}

export default UpdateWordCountForm;

