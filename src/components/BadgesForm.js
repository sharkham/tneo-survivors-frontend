import React, { Component } from 'react';

class BadgesForm extends Component {
  //render the badges in the form from badgetype props passed down
  state = {
    badgetypeId: ""
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: parseInt(value)
    })
    console.log(this.state)
  }

  getBadgetypeById = (id) => {
    return this.props.badgetypes.find(badgetype => badgetype.id === id)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const badgetype = this.getBadgetypeById(this.state.badgetypeId)
    console.log(badgetype)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select onChange={this.handleChange} name="badgetypeId" className="badgeselect">
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

