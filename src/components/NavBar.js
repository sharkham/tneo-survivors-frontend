import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser'


class NavBar extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  loginOrLogout = () => {
    if (!!this.props.currentUser) {
      return <Logout />
    } else {
      return <Login />
    }
  }

  render() {
    return (
      <ul>
        <li><a href="/">Home</a></li>
        <li>About</li>
        <li>Profile</li>
        <li>{this.loginOrLogout()}</li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(NavBar);
