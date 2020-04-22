import React, { Component } from 'react';

class BadgesForm extends Component {
  //render the badges in the form from badgetype props passed down
  render() {
    return (
      <form>
        <select className="badgeselect">
          <option value="">--Please choose a badge--</option>
          {this.props.badgetypes.map(badgetype => {
            //make new Option for each badgetype
            return <option key={badgetype.id} value={badgetype.id}>{badgetype.emoji} - {badgetype.name} - {badgetype.description}</option>
          })}
        </select>
        <input type="submit"/>
      </form>
    );
  }
}

export default BadgesForm;

