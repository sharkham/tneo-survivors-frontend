import React, { Component } from 'react';
// import NovelForm from './NovelForm';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { patchNovel } from '../actions/novels';
import { Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';



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
      goal: parseInt(this.state.goal)
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
      <div>
        <p>Edit your novel:</p>
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
          <FormGroup row>
            <Label for="wordcount" sm={2}>Word Count:</Label>
            <Col sm={10}>
              <Input type="number" min="1" name="wordcount" id="wordcount" onChange={this.handleChange} value={this.state.wordcount}/>
            </Col>
          </FormGroup>
          <Button color="secondary">Submit</Button>
        </Form>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditNovel));
