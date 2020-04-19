import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { signup } from '../actions/currentUser';

class Signup extends Component {

  state = {
    username: "",
    name: "",
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
    // this.props.login(this.state)
    this.setState({
      username: "",
      name: "",
      password: ""
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="username" placeholder="username" type="text" value={this.state.username}/>
        <input onChange={this.handleChange} name="name" placeholder="name" type="text" value={this.state.name}/>
        <input onChange={this.handleChange} name="password" placeholder="password" type="password" value={this.state.password}/>
        <input type="submit" value="Sign Up"/>
    </form>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     signup: credentials => dispatch(signup(credentials))
//   }
// }

export default connect(null)(Signup);

