import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <ul>
        <li><a href="/">Home</a></li>
        <li>About</li>
        <li>Profile</li>
        <li>Logout</li>
      </ul>
    );
  }
}

export default NavBar;
