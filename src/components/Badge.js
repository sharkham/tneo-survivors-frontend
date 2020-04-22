import React from 'react';

const Badge = ({ badge }) => {
  return (
    <div>
      {badge.emoji} - {badge.name} - {badge.description} <button>Delete</button>
    </div>
  );
}

export default Badge;
