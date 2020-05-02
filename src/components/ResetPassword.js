import React, { Component } from 'react';
import { Form, Label, Input, Button, Card, CardHeader, CardBody, FormText } from 'reactstrap';
import { Link } from 'react-router-dom';


class ResetPassword extends Component {

  state = {
    token: "",
    email: "",
    password: "",
    password_confirmation: ""
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
    //fire the reset password function here
    //check that password and password confirmation match each other!
    // this.props.signup(this.state)
    this.setState({
      token: "",
      email: "",
      password: "",
      password_confirmation: ""
    })
  }

  render() {
    return (
      <Card>
        <CardHeader>Reset Password:</CardHeader>
        <CardBody>

          <Form onSubmit={this.handleSubmit}>
            <Label for="token">Token:</Label>
            <Input required id="token" onChange={this.handleChange} name="token" placeholder="token" type="token" value={this.state.token}/>
            <FormText>The code that was emailed to you.</FormText>
            <Label for="email">Email:</Label>
            <Input required id="email" onChange={this.handleChange} name="email" placeholder="email" type="email" value={this.state.email}/>
            <Label for="password">New password:</Label>
            <Input required id="password" onChange={this.handleChange} name="password" placeholder="password" type="password" value={this.state.password}/>
            <FormText>Set your new password here.</FormText>
            <Label for="password_confirmation">Confirm new password:</Label>
            <Input required id="password_confirmation" onChange={this.handleChange} name="password_confirmation" placeholder="password_confirmation" type="password" value={this.state.password_confirmation}/>
            <Button type="secondary">Reset Password</Button>
          </Form>
          <CardText><Link to="/reset_password">Reset password</Link></CardText>

        </CardBody>
      </Card>
    );
  }
}


export default ResetPassword;

