import React, { Component } from 'react';
// import NovelForm from './NovelForm';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { patchNovel } from '../actions/novels';
import {
  Col,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Card,
  CardHeader,
  CardBody,
  CardText } from 'reactstrap';



class EditNovel extends Component {
  state = {
    title: this.props.novel.title,
    summary: this.props.novel.summary,
    plan: this.props.novel.plan,
    goal: this.props.novel.goal,
    wordcount: this.props.novel.wordcount
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
      goal: parseInt(this.state.goal),
      wordcount: parseInt(this.state.wordcount)
    }
    this.props.patchNovel(novel)
    this.props.history.push("/novel")

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
      <Card>
        <CardHeader>Edit your novel - <Link to="/novel">Back</Link></CardHeader>
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
            <FormGroup>
              <Label for="wordcount">Current Word Count:</Label>
                <Input type="number" min="1" name="wordcount" id="wordcount" onChange={this.handleChange} value={this.state.wordcount}/>
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
    user: state.currentUser,
    novel: state.currentNovel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    patchNovel: (novel) => dispatch(patchNovel(novel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditNovel));
