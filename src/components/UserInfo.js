import React, { Component } from 'react';
import UpdateWordCountForm from './UpdateWordCountForm'
import BasicInfoDisplay from './BasicInfoDisplay'

class UserInfo extends Component {
  render() {
    return (
      <div>
        <BasicInfoDisplay />
        <UpdateWordCountForm />
      </div>
    );
  }
}

export default UserInfo;
