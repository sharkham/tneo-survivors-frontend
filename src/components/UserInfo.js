import React, { Component } from 'react';
import UpdateWordCountForm from './UpdateWordCountForm'
import BasicInfoDisplay from './BasicInfoDisplay'
import { connect } from 'react-redux';

class UserInfo extends Component {
  //this component is going to access store to get and set user info

  renderUsername = () => {
    if (!!this.props.user) {
      return this.props.user.name
    }
  }

  render() {
    return (
      <div>
        <h1>{this.renderUsername()}</h1>
        <BasicInfoDisplay />
        <UpdateWordCountForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

export default connect(mapStateToProps)(UserInfo);
