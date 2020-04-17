import React, { Component } from 'react';
import UpdateWordCountForm from './UpdateWordCountForm'
import BasicInfoDisplay from './BasicInfoDisplay'
import { connect } from 'react-redux';
import { getNovel } from '../actions/currentNovel';


class NovelInfo extends Component {
  //this component is going to access store to get and set novel info
  componentDidUpdate() {
    if (!!this.props.user) {
      console.log("attempting")
      this.novel = this.props.getNovel(this.props.user)
    }
  }

  render() {
    return (
      <div>
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

const mapDispatchToProps = dispatch => {
  return {
    getNovel: user => dispatch(getNovel(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NovelInfo);
