import React, { Component } from 'react';
import Badges from './Badges';
import BadgesForm from './BadgesForm';
import { connect } from 'react-redux';

class NovelBadgesContainer extends Component {
  //this component is going to access store to get and set info

  render() {
    return (
      <div>
        <BadgesForm badgetypes={this.props.badgetypes} novel={this.props.novel} createBadge={this.props.createBadge}/>
        <Badges />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    badgetypes: state.badgetypes,
    novel: state.currentNovel
  }
}

const mapDispatchToProps = dispatch => {
  createBadge: (badge, novel) => dispatch(createBadge(badge, novel))
}

export default connect(mapStateToProps, mapDispatchToProps)(NovelBadgesContainer);
