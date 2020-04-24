import React, { Component } from 'react';
import UpdateWordCountForm from './UpdateWordCountForm';
import CreateNovel from './CreateNovel'
import { connect } from 'react-redux';
import { patchWordCount } from '../actions/novels';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText } from 'reactstrap';



class NovelInfo extends Component {


  render() {
    return (
      <div>
        <Card>
          <CardHeader>Title: {this.props.novel.title}</CardHeader>
          <CardBody>
            <CardText>Summary: {this.props.novel.summary}</CardText>
            <CardText>Plan of Attack: {this.props.novel.plan}</CardText>
            <CardText>Word Count Goal: {this.props.novel.goal}</CardText>
            <CardText>Current Word Count: {this.props.novel.wordcount}</CardText>
            <CardText><Link to="/novel/edit">Edit Novel</Link></CardText>
            <UpdateWordCountForm
              novel={this.props.novel}
              wordcount={this.props.novel.wordcount}
              patchWordCount={this.props.patchWordCount}
            />
          </CardBody>
        </Card>
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
