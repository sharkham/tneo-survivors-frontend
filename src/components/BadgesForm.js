import React from 'react';

const BadgesForm = (props) => {
  //render the badges in the form from badgetype props passed down
  return (
    <form>
      <select className="badgeselect">
        <option value="">--Please choose a badge--</option>
        {props.badgetypes.map(badgetype => {
          console.log(badgetype)
          //make new Option for each badgetype
          return <option key={badgetype.id} value={badgetype.id}>{badgetype.emoji} - {badgetype.name} - {badgetype.description}</option>
        })}
      </select>
    </form>
  );
}

export default BadgesForm;

