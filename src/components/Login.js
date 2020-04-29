import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/currentUser';
import { Form, Input, Button, Card, CardHeader, CardBody } from 'reactstrap';

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //the part where wordcount gets submitted somewhere!
    console.log(this.state)
    this.props.login(this.state)
    this.setState({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>Log In:</CardHeader>
        <CardBody>
          <Form inline onSubmit={this.handleSubmit}>
            {/* <Label for="loginusername">Username:</Label> */}
            <Input required id="loginusername" onChange={this.handleChange} name="username" placeholder="username" type="text" value={this.state.username}/>
            {/* <Label for="loginpassword">Password:</Label> */}
            <Input required id="loginpassword" onChange={this.handleChange} name="password" placeholder="password" type="password" value={this.state.password}/>
            <Button color="secondary">Login</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: credentials => dispatch(login(credentials))
  }
}

export default connect(null, mapDispatchToProps)(Login);

