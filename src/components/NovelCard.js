import React from 'react';

const NovelCard = ({ novel }) => {
  return (
    <div>
      {novel.title} - {novel.summary}
    </div>
  );
}

export default NovelCard;
