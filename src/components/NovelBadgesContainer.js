import React, { Component } from 'react';
import Badges from './Badges';
import BadgesForm from './BadgesForm';
import { createBadge, destroyBadge } from '../actions/badges';
import { connect } from 'react-redux';

class NovelBadgesContainer extends Component {
  //this component is going to access store to get and set info

  render() {
    return (
      <div>
        <BadgesForm badgetypes={this.props.badgetypes} novel={this.props.novel} createBadge={this.props.createBadge}/>
        <Badges badges={this.props.badges} destroyBadge={this.props.destroyBadge}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    badgetypes: state.badgetypes,
    novel: state.currentNovel,
    badges: state.currentNovel.badges
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createBadge: (badge, novel) => dispatch(createBadge(badge, novel)),
    destroyBadge: badgeId => dispatch(destroyBadge(badgeId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NovelBadgesContainer);
