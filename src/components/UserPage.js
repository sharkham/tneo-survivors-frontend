import React, { Component } from 'react';
import NovelInfo from './NovelInfo'
import NovelBadgesContainer from './NovelBadgesContainer'

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

export default UserPage;
