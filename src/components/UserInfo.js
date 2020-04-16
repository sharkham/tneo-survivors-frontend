import React, { Component } from 'react';
import UpdateWordCountForm from './UpdateWordCountForm'

class UserInfo extends Component {
  render() {
    return (
      <div>
        Title: Novel Title
        Summary: Novel Summary
        Plan of Attack: Novel Plan
        Goal: 50000
        Word Count: 10000
        <UpdateWordCountForm />
      </div>
    );
  }
}

export default UserInfo;
