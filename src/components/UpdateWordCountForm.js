import React, { Component } from 'react';

class UpdateWordCountForm extends Component {
  state = {
    addedWords: 0,
    wordCount: this.props.wordcount
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  updateNovel = (updatedWordCount) => {
    return {
      ...this.props.novel,
      wordcount: updatedWordCount
    }
  }

  // updateWordCount = (wordCount, addedWords) => {
  //   if (typeof wordCount === "number" && typeof addedWords === "number") {

  //   }
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    const updatedWordCount = this.state.wordCount + parseInt(this.state.addedWords)
    // if (typeof updatedWordCount === "number") {
      const updatedNovel = this.updateNovel(updatedWordCount)
      this.props.patchWordCount(updatedNovel)
      this.setState({
        ...this.state,
        addedWords: 0,
        wordCount: updatedWordCount
      })
    // } else {
    //   alert("Please enter a number")
    // }
    //this also currently adds badges to currentNovel,
    //which currentNovel didn't have here because we were getting it from the user object
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

