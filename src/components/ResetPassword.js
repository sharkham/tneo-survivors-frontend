import React, { Component } from 'react';
import { Form, Label, Input, Button, Card, CardHeader, CardBody, FormText } from 'reactstrap';
import { resetPassword } from '../helpers/passwords';
import { connect } from 'react-redux';


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
    const { password, password_confirmation } = this.state;
    if (password !== password_confirmation) {
      alert("Passwords don't match");
      this.setState({
        password: "",
        password_confirmation: ""
      })
    } else {
      console.log(this.state)
      this.props.resetPassword(this.state)
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
  }

  render() {
    return (
      <Card>
        <CardHeader>Reset Password:</CardHeader>
        <CardBody>

          <Form onSubmit={this.handleSubmit}>
            <Label for="token">Token:</Label>
            <Input required id="token" onChange={this.handleChange} name="token" placeholder="token" type="token" value={this.state.token}/>
            <FormText>The code that was emailed to you. This is case-sensitive.</FormText>
            <Label for="email">Email:</Label>
            <Input required id="email" onChange={this.handleChange} name="email" placeholder="email" type="email" value={this.state.email}/>
            <Label for="password">New password:</Label>
            <Input required id="password" onChange={this.handleChange} name="password" placeholder="password" type="password" value={this.state.password}/>
            <FormText>Set your new password here.</FormText>
            <Label for="password_confirmation">Confirm new password:</Label>
            <Input required id="password_confirmation" onChange={this.handleChange} name="password_confirmation" placeholder="password confirmation" type="password" value={this.state.password_confirmation}/>
            <Button type="secondary">Reset Password</Button>
          </Form>

        </CardBody>
      </Card>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetPassword: (credentials) => dispatch(resetPassword(credentials))
  }
}

export default connect(null, mapDispatchToProps)(ResetPassword);

