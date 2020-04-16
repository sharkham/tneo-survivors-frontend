// import React from 'react';
// import connect from 'react-redux';

// const Login = (props) => {
//   return (
//     <form>
//       <input name="username" placeholder="username" type="text"/>
//       <input name="password" placeholder="password" type="password"/>
//       <input type="submit" value="Log In"/>
//     </form>
//   );
// }

// const mapStateToProps = state => {
//   return {
//     username: state.loginForm.username,
//     password: state.loginForm.password
//   }
// }

// export default connect(mapStateToProps)(Login);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';

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
    updateLoginForm: formData => dispatch(updateLoginForm(formData))
  }
}

export default connect(null, mapDispatchToProps)(Login);

