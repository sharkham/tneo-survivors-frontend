import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNovel } from '../actions/novels';
import { Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardHeader,
  CardBody } from 'reactstrap';

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
      <Card>
        <CardHeader>Create your novel:</CardHeader>
        <CardBody>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="title">Title:</Label>
                <Input type="text" name="title" id="title" placeholder="novel title" onChange={this.handleChange} value={this.state.title}/>
            </FormGroup>
            <FormGroup>
              <Label for="summary">Summary:</Label>
                <Input type="textarea" name="summary" id="summary" onChange={this.handleChange} value={this.state.summary}/>
            </FormGroup>
            <FormGroup>
              <Label for="plan">Plan of Attack:</Label>
                <Input type="select" id="plan" name="plan" onChange={this.handleChange} value={this.state.plan}>
                  <option value="">--Please choose a plan--</option>
                  {this.planTypes().map(planType => {
                    //make new Option for each planType
                    return <option key={planType} value={planType}>{planType}</option>
                  })}
                </Input>
            </FormGroup>
            <FormGroup>
              <Label for="goal">Word Count Goal:</Label>
                <Input type="number" min="1" name="goal" id="goal" onChange={this.handleChange} value={this.state.goal}/>
            </FormGroup>
            <Button color="secondary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
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
