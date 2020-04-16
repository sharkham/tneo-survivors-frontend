import React, { Component } from 'react';
import Badges from './Badges'
import BadgesForm from './BadgesForm'

class UserBadgesContainer extends Component {
  //this component is going to access store to get and set info

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
