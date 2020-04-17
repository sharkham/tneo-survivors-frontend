import React, { Component } from 'react';
import NovelInfo from './NovelInfo';
import NovelBadgesContainer from './NovelBadgesContainer';
import { getNovel } from '../actions/currentNovel';
import { connect } from 'react-redux';

class UserPage extends Component {
  componentDidUpdate() {
    if (!!this.props.user) {
      console.log("attempting")
      this.props.getNovel(this.props.user)
    }
  }

  render() {
    return (
      <div>
        {/* Add conditional rendering--if User has no novel User is prompted to create novel */}
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
