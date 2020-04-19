import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser'


class NavBar extends Component {

  // componentDidMount() {
  //   this.props.getCurrentUser()
  // }


  render() {
    return (
      <div className="nav">
        <ul>
          { this.props.currentUser ? <li>Welcome, {this.props.currentUser.name}</li> : "" }
          <li><a href="/">Home</a></li>
          <li>About</li>
          <li>Profile</li>
          { this.props.currentUser ? <li><Logout /></li> : <li><Login /></li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
