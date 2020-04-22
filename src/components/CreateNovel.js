import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNovel } from '../actions/novels';

class CreateNovel extends Component {

  state = {
    title: "",
    summary: "",
    plan: "",
    goal: 0
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

    const novel = {
      ...this.state,
      goal: parseInt(this.state.goal)
    }
    this.props.createNovel(novel, this.props.user)
    // console.log(this.props.submitAction)
    // console.log(this.props.user)
    // console.log(novel)
    // this.props.patchWordCount(updatedNovel)

    // this.setState({
    //   title: "",
    //   summary: "",
    //   plan: "",
    //   goal: 0
    // })
  }

  render() {
    return (
      <div>
        <p>Create your novel:</p>
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createNovel: (novel, user) => dispatch(createNovel(novel, user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNovel);
