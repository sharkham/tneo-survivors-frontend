import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNovel } from '../actions/novels';
import { Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';

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
        <h4>Create your novel:</h4>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="title" sm={2}>Title:</Label>
            <Col sm={10}>
              <Input type="text" name="title" id="title" placeholder="novel title" onChange={this.handleChange} value={this.state.title}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="summary" sm={2}>Summary:</Label>
            <Col sm={10}>
              <Input type="textarea" name="summary" id="summary" onChange={this.handleChange} value={this.state.summary}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="plan" sm={2}>Plan of Attack:</Label>
            <Col sm={10}>
              <Input type="select" id="plan" name="plan" onChange={this.handleChange} value={this.state.plan}>
                <option value="">--Please choose a plan--</option>
                {this.planTypes().map(planType => {
                  //make new Option for each planType
                  return <option key={planType} value={planType}>{planType}</option>
                })}
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="goal" sm={2}>Word Count Goal:</Label>
            <Col sm={10}>
              <Input type="number" min="1" name="goal" id="goal" onChange={this.handleChange} value={this.state.goal}/>
            </Col>
          </FormGroup>
          <Button color="secondary">Submit</Button>
        </Form>
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
