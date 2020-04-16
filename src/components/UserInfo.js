import React, { Component } from 'react';
import UpdateWordCountForm from './UpdateWordCountForm'
import BasicInfoDisplay from './BasicInfoDisplay'

class UserInfo extends Component {
  //this component is going to access store to get and set user info


  render() {
    return (
      <div>
        <h1>Username (from store)</h1>
        <BasicInfoDisplay />
        <UpdateWordCountForm />
      </div>
    );
  }
}

export default UserInfo;
