import React, { Component } from 'react';
import UserInfo from './UserInfo'
import UserBadgesContainer from './UserBadgesContainer'

class UserPage extends Component {
  render() {
    return (
      <div>
        <h1>Username</h1>
        <UserInfo />
        <UserBadgesContainer />
      </div>
    );
  }
}

export default UserPage;
