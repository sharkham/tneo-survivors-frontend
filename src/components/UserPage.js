import React, { Component } from 'react';
import NovelInfo from './NovelInfo';
import NovelBadgesContainer from './NovelBadgesContainer';
import { getNovel } from '../actions/currentNovel';
import { connect } from 'react-redux';

class UserPage extends Component {
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

const mapDispatchToProps = dispatch => {
  return {
    getNovel: novel => dispatch(getNovel(novel))
  }
}

export default connect(null, mapDispatchToProps)(UserPage);
