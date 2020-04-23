import React from 'react';
import SmallBadgesContainer from './SmallBadgesContainer';
import { Card, CardHeader, CardText, CardTitle, CardBody } from 'reactstrap';

const NovelCard = ({ novel, currentUser, container }) => {
  return (
    <Card>
      <CardHeader>{novel.title}</CardHeader>
      <CardBody>
        {container !== "PreviousNovelsPage" ? <CardTitle>by {novel.user.name}</CardTitle> : ""}
        {/* <CardText>{novel.summary}</CardText> */}
        {container === "PreviousNovelsPage" ? <CardTitle>Summary: {novel.summary}</CardTitle> : ""}
        {container === "PreviousNovelsPage" ? <CardTitle>Plan: {novel.plan}</CardTitle> : ""}
        {container === "PreviousNovelsPage" ? <CardTitle>Goal: {novel.goal}</CardTitle> : ""}
        {container === "PreviousNovelsPage" ? <CardTitle>Final Word Count: {novel.wordcount}</CardTitle> : ""}
        <SmallBadgesContainer badges={novel.badges} />
      </CardBody>
    </Card>
  );
}

export default NovelCard;
