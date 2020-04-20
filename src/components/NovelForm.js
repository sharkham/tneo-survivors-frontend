import React, { Component } from 'react';

class NovelForm extends Component {
  state = {
    title: "",
    summary: "",
    plan: "",
    goal: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    console.log(this.state)
    // this.props.patchWordCount(updatedNovel)

    this.setState({
      title: "",
      summary: "",
      plan: "",
      goal: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="title" type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
        <input id="summary" type="textarea" name="summary" onChange={this.handleChange} value={this.state.summary}/>
        {/* <input id="plan" type="text" min="1" name="plan" onChange={this.handleChange} value={this.state.plan}/> */}
        <input id="goal" type="number" min="1" name="goal" onChange={this.handleChange} value={this.state.goal}/>
        <input type="submit"/>
      </form>
    );
  }
}

export default NovelForm;

