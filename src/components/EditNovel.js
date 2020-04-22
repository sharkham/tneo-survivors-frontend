import React, { Component } from 'react';
// import NovelForm from './NovelForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { patchNovel } from '../actions/novels';


class EditNovel extends Component {
  state = {
    title: this.props.novel.title,
    summary: this.props.novel.summary,
    plan: this.props.novel.plan,
    goal: this.props.novel.goal
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
      ...this.props.novel,
      title: this.state.title,
      summary: this.state.summary,
      plan: this.state.plan,
      goal: parseInt(this.state.goal)
    }
    console.log(novel)

    // const novel = {
    //   ...this.state
    // }
    // this.props.patchNovel(novel)


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
        <p>Edit your novel:</p>
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
          <Link to="/novel">Back</Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    novel: state.currentNovel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    patchNovel: (novel) => dispatch(patchNovel(novel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNovel);
