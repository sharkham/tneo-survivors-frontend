import React from 'react';
import { CardHeader, CardText, CardBody } from 'reactstrap';

const BasicInfoDisplay = (props) => {
  return (
    <div>
        <CardHeader>Title: {props.novel.title}</CardHeader>
        <CardBody>
          <CardText>Summary: {props.novel.summary}</CardText>
          <CardText>Plan of Attack: {props.novel.plan}</CardText>
          <CardText>Goal: {props.novel.goal}</CardText>
          <CardText>Word Count: {props.novel.wordcount}</CardText>
        </CardBody>
    </div>
  );
}

export default BasicInfoDisplay;
