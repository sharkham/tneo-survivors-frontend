import React from 'react';
import Badge from './Badge'

const Badges = (props) => {
  return (
    <div>
      {props.badges.map(badge => {
        return <Badge key={badge.id} badge={badge} destroyBadge={props.destroyBadge}/>
      })}
    </div>
  );
}

export default Badges;
