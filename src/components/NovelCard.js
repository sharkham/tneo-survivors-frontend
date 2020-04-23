import React from 'react';

const NovelCard = ({ novel }) => {
  return (
    <div>
      {novel.title}, by {novel.user.name}. "{novel.summary}"
    </div>
  );
}

export default NovelCard;
