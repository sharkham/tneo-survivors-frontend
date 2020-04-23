import React, { Component } from 'react';
import { connect } from 'react-redux';
import NovelCard from './NovelCard';

class AllNovelsIndex extends Component {
  render() {
    return (
      <div>
        {this.props.novels.map(novel => {
          return <NovelCard key={novel.id} novel={novel}/>
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    novels: state.allCurrentNovels
  }
}

export default connect(mapStateToProps)(AllNovelsIndex);
