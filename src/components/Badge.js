import React from 'react';
import { Button } from 'reactstrap';

const Badge = ({ badge, destroyBadge }) => {
  return (
    <div>
      <span style={{fontSize: 24}}>{badge.emoji}</span> - {badge.name} - {badge.description} <Button size="sm" color="secondary" onClick={() => destroyBadge(badge.id)}> X </Button>
    </div>
  );
}

export default Badge;
