import React, { Component } from 'react';
import UpdateWordCountForm from './UpdateWordCountForm';
import BasicInfoDisplay from './BasicInfoDisplay';
import CreateNovel from './CreateNovel'
import { connect } from 'react-redux';
import { patchWordCount } from '../actions/novels';
import { Link } from 'react-router-dom';



class NovelInfo extends Component {


  render() {
    return (
      <div>
        <BasicInfoDisplay novel={this.props.novel}/>
        <Link to="/novel/edit">Edit Novel</Link>
        <UpdateWordCountForm novel={this.props.novel} wordcount={this.props.novel.wordcount} patchWordCount={this.props.patchWordCount}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // user: state.currentUser,
    novel: state.currentNovel
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // getNovel: user => dispatch(getNovel(user)),
    patchWordCount: novel => dispatch(patchWordCount(novel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NovelInfo);
