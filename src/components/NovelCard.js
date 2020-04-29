import React from 'react';
import SmallBadgesContainer from './SmallBadgesContainer';
import { Card, CardHeader, CardText, CardTitle, CardBody, Progress } from 'reactstrap';
import { progressbar } from '../helpers/progressbar'

const NovelCard = ({ novel, currentUser, container }) => {

  return (
    <Card>
      <CardHeader>
        {novel.title}
        {container === "PreviousNovelsPage" ? <> ({novel.year})</> : ""}
        <Progress value={progressbar(novel.wordcount, novel.goal)}/>
        <small className="text-muted">({novel.wordcount} / {novel.goal})</small>
      </CardHeader>
      <CardBody>
        {container !== "PreviousNovelsPage" ? <CardTitle>by {novel.user.name}</CardTitle> : ""}
        {/* <CardText>{novel.summary}</CardText> */}
        {container === "PreviousNovelsPage" ? <CardText>Summary: {novel.summary}</CardText> : ""}
        <CardText>Plan of Attack: {novel.plan}</CardText>
        {container === "PreviousNovelsPage" ? <CardText>Goal: {novel.goal}</CardText> : ""}
        {container === "PreviousNovelsPage" ? <CardText>Final Word Count: {novel.wordcount}</CardText> : ""}
        <SmallBadgesContainer badges={novel.badges} />
      </CardBody>
    </Card>
  );
}

export default NovelCard;
