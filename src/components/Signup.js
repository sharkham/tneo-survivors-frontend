import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/currentUser';

class Signup extends Component {

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
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="username" placeholder="username" type="text" value={this.state.username}/>
        <input onChange={this.handleChange} name="password" placeholder="password" type="password" value={this.state.password}/>
        <input type="submit" value="Log In"/>
    </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: credentials => dispatch(login(credentials))
  }
}

export default connect(null, mapDispatchToProps)(Signup);

