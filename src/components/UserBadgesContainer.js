import React, { Component } from 'react';
import Badges from './Badges'
import BadgesForm from './BadgesForm'

class UserBadgesContainer extends Component {
  render() {
    return (
      <div>
        <BadgesForm />
        <Badges />
      </div>
    );
  }
}

export default UserBadgesContainer;
