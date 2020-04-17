import React, { Component } from 'react';
import UpdateWordCountForm from './UpdateWordCountForm'
import BasicInfoDisplay from './BasicInfoDisplay'
import { connect } from 'react-redux';

class UserInfo extends Component {
  //this component is going to access store to get and set user info
  componentDidMount = () => {
    console.log(this.props.user)
  }

  componentDidUpdate = () => {
    console.log(this.props.user)
  }

  // renderUsername = () => {
  //   if (!!this.props.user.username) {
  //     return this.props.user.username
  //   }
  // }

  render() {
    return (
      <div>
        <h1>User</h1>
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
