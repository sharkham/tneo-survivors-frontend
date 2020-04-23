import React from 'react';
import SmallBadge from './SmallBadge'

const SmallBadgesContainer = (props) => {
  return (
    <div>
      {/* go back later and restrict number of iterations */}
      {props.badges.map(badge => {
        return <SmallBadge key={badge.id} badge={badge} />
      })}
    </div>
  );
}

export default SmallBadgesContainer;
