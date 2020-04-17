import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser'


const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <input type="submit" value="Log Out"/>
    </form>
  )
}

export default connect(null, { logout })(Logout)

// class Logout extends Component {

  //   handleSubmit = (event) => {
  //     event.preventDefault()
  //     //the part where wordcount gets submitted somewhere!
  //     console.log(this.state)
  //     this.props.login(this.state)
  //     this.setState({
  //       username: "",
  //       password: ""
  //     })
  //   }

  //   render() {
  //     return (
  //       <form onSubmit={this.handleSubmit}>
  //         <input type="submit" value="Log In"/>
  //     </form>
  //     );
  //   }
  // }

  // const mapDispatchToProps = dispatch => {
  //   return {
  //     logout: credentials => dispatch(logout(credentials))
  //   }
  // }

  // export default connect(null, mapDispatchToProps)(Logout);
