import React from 'react';

const Badge = ({ badge, destroyBadge }) => {
  return (
    <div>
      {badge.emoji} - {badge.name} - {badge.description} <button onClick={() => destroyBadge(badge.id)}>Delete</button>
    </div>
  );
}

export default Badge;
