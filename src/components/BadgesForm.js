import React from 'react';

const BadgesForm = (props) => {
  //render the badges in the form from badgetype props passed down
  return (
    <form>
      <select className="badgeselect">
        <option value="">--Please choose a badge--</option>
        {props.badgetypes.forEach(badgetype => {
          //make new Option for each badgetype
          return <option value={badgetype.id}>{badgetype.name} - {badgetype.description}</option>
        })}
      </select>
    </form>
  );
}

export default BadgesForm;
