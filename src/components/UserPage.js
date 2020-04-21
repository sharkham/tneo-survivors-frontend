import React, { Component } from 'react';
import NovelInfo from './NovelInfo';
import NovelBadgesContainer from './NovelBadgesContainer';
import UserInfo from './UserInfo'
import { connect } from 'react-redux';

class UserPage extends Component {


  // createNovelPrompt = () => {
  //   if (!this.novel) {
  //     return <p>Create a novel for this year?</p>
  //   } else {
  //     return <p>Novel exists, cool</p>
  //   }
  // }

  // renderUsername = () => {
  //   if (!!this.props.user) {
  //     return this.props.user.name
  //   }
  // }

  render() {
    return (
      <div>
        {/* Add conditional rendering--if User has no novel User is prompted to create novel */}
        {/* {this.createNovelPrompt()} */}
        {/* Maybe turn this into a stateless functional component where username is passed down as props */}
        {/* <h1>{this.renderUsername()}</h1> */}
        <UserInfo name={this.props.user.name} username={this.props.user.username}/>
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



export default connect(mapStateToProps)(UserPage);
