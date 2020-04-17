import React, { Component } from 'react';
import Badges from './Badges'
import BadgesForm from './BadgesForm'

class NovelBadgesContainer extends Component {
  //this component is going to access store to get and set info

  state = {
    badgetypes: [
      {
        "id": 1,
        "name": "Starting to get started",
        "description": "updated spreadsheet",
        "emoji": "🎉",
        },
        {
        "id": 2,
        "name": "Starry Night",
        "description": "night scene",
        "emoji": "🌉",
        },
        {
        "id": 3,
        "name": "Here comes the sun!",
        "description": "morning scene",
        "emoji": "🌅",
        }
    ]
  }

  render() {
    return (
      <div>
        <BadgesForm badgetypes={this.state.badgetypes}/>
        <Badges />
      </div>
    );
  }
}

export default NovelBadgesContainer;
