import React, { Component } from 'react';
import Logout from './Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser';
import { Link } from 'react-router-dom';


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
          <li><Link to="/profile">Profile</Link></li>
          { this.props.currentUser ? <li><Logout /></li> : ""}
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
