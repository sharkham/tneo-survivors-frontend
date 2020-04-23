import React, { Component } from 'react';
import { Button, Form, Input } from 'reactstrap';

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
  }

  getBadgetypeById = (id) => {
    return this.props.badgetypes.find(badgetype => badgetype.id === id)
  }

  checkIfExists = (badgetype_id) => {
    //iterate over this.props.novel.badges to see if they include one where badgetype_id === id
    const existingBadgetype = this.props.novel.badges.find(badge => badge.badgetype_id === badgetype_id)
    return !!existingBadgetype
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const exists = this.checkIfExists(this.state.badgetypeId)
    if (exists === false) {
      const badge = this.getBadgetypeById(this.state.badgetypeId)
      this.props.createBadge(badge, this.props.novel)
      this.setState({
        badgetypeId: ""
      })
    } else {
      alert("You have already earned that badge for this novel!")
      this.setState({
        badgetypeId: ""
      })
    }
  }

  render() {
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <Input type="select" onChange={this.handleChange} name="badgetypeId" className="badgeselect" value={this.state.badgetypeId}>
          <option value="">--Please choose a badge--</option>
          {this.props.badgetypes.map(badgetype => {
            //make new Option for each badgetype
            return <option key={badgetype.id} value={badgetype.id}>{badgetype.emoji} - {badgetype.name} - {badgetype.description}</option>
          })}
        </Input>
        <Button color="secondary">Submit</Button>
      </Form>
    );
  }
}

export default BadgesForm;

