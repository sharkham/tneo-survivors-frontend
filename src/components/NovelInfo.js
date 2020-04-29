import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardText, Progress } from 'reactstrap';
import { progressbar } from '../helpers/progressbar'



class NovelInfo extends Component {

  // timeFormatter = (data) => {
  //   const date = new Date(data)
  //   return {
  //     date
  //   }
  // }

  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            {this.props.novel.title} - <Link to="/novel/edit">Edit Novel</Link>
            <Progress value={progressbar(this.props.novel.wordcount, this.props.novel.goal)}/>
            <small className="text-muted">({this.props.novel.wordcount} / {this.props.novel.goal})</small>
          </CardHeader>
          <CardBody>
            <CardText>Summary: {this.props.novel.summary}</CardText>
            <CardText>Plan of Attack: {this.props.novel.plan}</CardText>
            <CardText>Word Count Goal: {this.props.novel.goal}</CardText>
            <CardText>Current Word Count: {this.props.novel.wordcount}</CardText>
            {/* <CardText>Updated at: {this.timeFormatter(this.props.novel.updated_at)}</CardText> */}
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
