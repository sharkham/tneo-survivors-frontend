import React from 'react';
import SmallBadgesContainer from './SmallBadgesContainer';
import { Card, CardHeader, CardText, CardTitle, CardBody, Progress, FormText } from 'reactstrap';
import { progressbar } from '../helpers/progressbar'

const NovelCard = ({ novel, currentUser, container }) => {
  return (
    <Card>
      <CardHeader>{novel.title}
        <Progress value={progressbar(novel.wordcount, novel.goal)}/>
        <FormText>({novel.wordcount} / {novel.goal})</FormText>
      </CardHeader>
      <CardBody>
        {container !== "PreviousNovelsPage" ? <CardTitle>by {novel.user.name}</CardTitle> : ""}
        {/* <CardText>{novel.summary}</CardText> */}
        {container === "PreviousNovelsPage" ? <CardTitle>Summary: {novel.summary}</CardTitle> : ""}
        <CardTitle>Plan of Attack: {novel.plan}</CardTitle>
        {container === "PreviousNovelsPage" ? <CardTitle>Goal: {novel.goal}</CardTitle> : ""}
        {container === "PreviousNovelsPage" ? <CardTitle>Final Word Count: {novel.wordcount}</CardTitle> : ""}
        <SmallBadgesContainer badges={novel.badges} />
      </CardBody>
    </Card>
  );
}

export default NovelCard;
