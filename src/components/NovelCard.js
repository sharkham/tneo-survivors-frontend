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
        <SmallBadgesContainer badges={novel.badges} />
      </CardBody>
    </Card>
  );
}

export default NovelCard;
