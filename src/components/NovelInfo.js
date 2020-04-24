import React, { Component } from 'react';
import CreateNovel from './CreateNovel'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText, Progress, FormText } from 'reactstrap';
import { progressbar } from '../helpers/progressbar'



class NovelInfo extends Component {


  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            {this.props.novel.title} - <Link to="/novel/edit">Edit Novel</Link>
            <Progress value={progressbar(this.props.novel.wordcount, this.props.novel.goal)}/>
            <FormText>({this.props.novel.wordcount} / {this.props.novel.goal})</FormText>
          </CardHeader>
          <CardBody>
            <CardText>Summary: {this.props.novel.summary}</CardText>
            <CardText>Plan of Attack: {this.props.novel.plan}</CardText>
            <CardText>Word Count Goal: {this.props.novel.goal}</CardText>
            <CardText>Current Word Count: {this.props.novel.wordcount}</CardText>
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

export default connect(mapStateToProps)(NovelInfo);
