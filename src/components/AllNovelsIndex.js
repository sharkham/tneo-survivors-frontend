import React, { Component } from 'react';
import { connect } from 'react-redux';
import NovelCard from './NovelCard';

class AllNovelsIndex extends Component {
  render() {
    return (
      <div>
        <p>All of this year's novels:</p>
        {this.props.novels.map(novel => {
          return <NovelCard key={novel.id} novel={novel} currentUser={this.props.currentUser}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    novels: state.allCurrentNovels,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(AllNovelsIndex);
