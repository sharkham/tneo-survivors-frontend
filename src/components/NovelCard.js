import React from 'react';
import SmallBadgesContainer from './SmallBadgesContainer'

const NovelCard = ({ novel, currentUser }) => {
  return (
    <div>
      <p>{novel.title}</p>
      {novel.user.name !== currentUser.name ? <p>by {novel.user.name}</p> : ""}
      <p>{novel.summary}</p>
      <SmallBadgesContainer badges={novel.badges} />
    </div>
  );
}

export default NovelCard;
