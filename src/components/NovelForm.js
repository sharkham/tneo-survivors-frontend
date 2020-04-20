import React, { Component } from 'react';

class NovelForm extends Component {
  state = {
    title: "",
    summary: "",
    plan: "",
    goal: ""
  }

  planTypes = () => {
    return [
      "November Warrior",
      "Slow and Steady",
      "Revise Revise",
      "Hi, I'm in School",
      "A Little of Everything",
      "Condensed Timeline",
      "My Way or the Highway"
    ]
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
        <select id="plan" name="plan" onChange={this.handleChange} value={this.state.plan}>
          <option value="">--Please choose a plan--</option>
          {this.planTypes().map(planType => {
            //make new Option for each planType
            return <option key={planType} value={planType}>{planType}</option>
          })}
        </select>
        {/* <input id="plan" type="text" min="1" name="plan" onChange={this.handleChange} value={this.state.plan}/> */}
        <input id="goal" type="number" min="1" name="goal" onChange={this.handleChange} value={this.state.goal}/>
        <input type="submit"/>
      </form>
    );
  }
}

export default NovelForm;

