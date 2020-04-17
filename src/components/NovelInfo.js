import React, { Component } from 'react';
import UpdateWordCountForm from './UpdateWordCountForm'
import BasicInfoDisplay from './BasicInfoDisplay'
import { connect } from 'react-redux';
import { getNovel } from '../actions/currentNovel';


class NovelInfo extends Component {
  //this component is going to access store to get and set novel info
  componentDidUpdate() {
    if (!!this.props.user && !this.props.novel) {
      console.log("attempting")
      this.props.getNovel(this.props.user)
    }
  }

  //this component should only display if user has a novel, the "create a novel" flicker is frustrating
  //and create a novel should be a different component
  novelInfoOrPrompt = () => {
    if (!!this.props.novel) {
      return (
        <div>
          <BasicInfoDisplay novel={this.props.novel}/>
          <UpdateWordCountForm />
        </div>
      );
    } else {
      return <div>Create a novel?</div>
    }

  }

  render() {
    return (
      <div>
        {this.novelInfoOrPrompt()}
        {/* <BasicInfoDisplay />
        <UpdateWordCountForm /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    novel: state.currentNovel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getNovel: user => dispatch(getNovel(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NovelInfo);
