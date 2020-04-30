import React, { Component } from 'react';
import { Card, CardHeader, CardBody, Form, Input, Button } from 'reactstrap';
import { resetPassword } from '../helpers/resetPassword';

class ResetPassword extends Component {

  state = {
    email: ""
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
    resetPassword(this.state.email)
    console.log(this.state)
    this.setState({
      email: ""
    })
    //put a redirect in here.
  }

  render() {
    return (
      <Card>
        <CardHeader>Request password reset:</CardHeader>
        <CardBody>
          <Form inline onSubmit={this.handleSubmit}>
            <Input required id="resetpasswordemail" onChange={this.handleChange} name="email" placeholder="email" type="email" value={this.state.email}/>
            <Button color="secondary">Submit</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
}

export default ResetPassword;
