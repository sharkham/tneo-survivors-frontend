import React, { Component } from 'react';
import UserInfo from './UserInfo'
import UserBadgesContainer from './UserBadgesContainer'

class UserPage extends Component {
  render() {
    return (
      <div>
        <UserInfo />
        <UserBadgesContainer />
      </div>
    );
  }
}

export default UserPage;
