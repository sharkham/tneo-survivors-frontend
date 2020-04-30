import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/currentUser';
import { Form, Input, Button, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import { Link } from 'react-router-dom';

class Login extends Component {

  state = {
    email: "",
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
      email: "",
      password: ""
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>Log In:</CardHeader>
        <CardBody>
          <Form inline onSubmit={this.handleSubmit}>
            {/* <Label for="loginemail">email:</Label> */}
            <Input required id="loginemail" onChange={this.handleChange} name="email" placeholder="email" type="email" value={this.state.email}/>
            {/* <Label for="loginpassword">Password:</Label> */}
            <Input required id="loginpassword" onChange={this.handleChange} name="password" placeholder="password" type="password" value={this.state.password}/>
            <Button color="secondary">Login</Button>
          </Form>
          <CardText><Link to="/reset_password">Forgot password?</Link></CardText>
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

