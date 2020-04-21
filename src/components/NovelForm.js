import React, { Component } from 'react';

class NovelForm extends Component {
  state = {
    title: this.props.initialForm.title,
    summary: this.props.initialForm.summary,
    plan: this.props.initialForm.plan,
    goal: this.props.initialForm.goal
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
        <label>
          Title:
          <input id="title" type="text" name="title" onChange={this.handleChange} value={this.state.title}/>
        </label>
        <label>
          Summary:
          <input id="summary" type="textarea" name="summary" onChange={this.handleChange} value={this.state.summary}/>
        </label>
        <label>
          Plan:
          <select id="plan" name="plan" onChange={this.handleChange} value={this.state.plan}>
            <option value="">--Please choose a plan--</option>
            {this.planTypes().map(planType => {
              //make new Option for each planType
              return <option key={planType} value={planType}>{planType}</option>
            })}
          </select>
        </label>
        <label>
          Word count goal:
          <input id="goal" type="number" min="1" name="goal" onChange={this.handleChange} value={this.state.goal}/>
        </label>
        <input type="submit"/>
      </form>
    );
  }
}

export default NovelForm;

