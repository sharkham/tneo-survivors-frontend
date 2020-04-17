import React, { Component } from 'react';
import NovelInfo from './NovelInfo';
import NovelBadgesContainer from './NovelBadgesContainer';
import { getNovel } from '../actions/currentNovel';
import { connect } from 'react-redux';

class UserPage extends Component {
  componentDidUpdate() {
    if (!!this.props.user) {
      console.log("attempting")
      this.novel = this.props.getNovel(this.props.user)
    }
  }

  // createNovelPrompt = () => {
  //   if (!this.novel) {
  //     return <p>Create a novel for this year?</p>
  //   } else {
  //     return <p>Novel exists, cool</p>
  //   }
  // }

  renderUsername = () => {
    if (!!this.props.user) {
      return this.props.user.name
    }
  }

  render() {
    return (
      <div>
        {/* Add conditional rendering--if User has no novel User is prompted to create novel */}
        {/* {this.createNovelPrompt()} */}
        <h1>{this.renderUsername()}</h1>
        <NovelInfo />
        <NovelBadgesContainer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNovel: user => dispatch(getNovel(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);
