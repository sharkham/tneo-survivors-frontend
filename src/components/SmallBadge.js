import React from 'react';

const SmallBadge = (props) => {

  return (
    <>
      <span style={{fontSize: 24}}>{props.badge.emoji}</span>
    </>
  );
}

export default SmallBadge;
