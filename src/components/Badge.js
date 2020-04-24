import React from 'react';
import { Button } from 'reactstrap';

const Badge = ({ badge, destroyBadge }) => {
  return (
    <div>
      {badge.emoji} - {badge.name} - {badge.description} <Button size="sm" color="secondary" onClick={() => destroyBadge(badge.id)}> X </Button>
    </div>
  );
}

export default Badge;
