import React from 'react';
import SmallBadgesContainer from './SmallBadgesContainer';
import { Card, CardHeader, CardText, CardTitle, CardBody } from 'reactstrap';

const NovelCard = ({ novel, currentUser }) => {
  return (
    <Card>
      <CardHeader>{novel.title}</CardHeader>
      <CardBody>
        {novel.user.name !== currentUser.name ? <CardTitle>by {novel.user.name}</CardTitle> : ""}
        <CardText>{novel.summary}</CardText>
        {novel.user.name === currentUser.name ? <CardTitle>Plan: {novel.plan}</CardTitle> : ""}
        {novel.user.name === currentUser.name ? <CardTitle>Goal: {novel.goal}</CardTitle> : ""}
        {novel.user.name === currentUser.name ? <CardTitle>Final Word Count: {novel.wordcount}</CardTitle> : ""}
        <SmallBadgesContainer badges={novel.badges} />
      </CardBody>
    </Card>
  );
}

export default NovelCard;
