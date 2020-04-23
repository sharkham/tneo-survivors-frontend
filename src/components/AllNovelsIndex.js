import React, { Component } from 'react';
import { connect } from 'react-redux';
import NovelCard from './NovelCard';
import { CardColumns } from 'reactstrap';

class AllNovelsIndex extends Component {
  render() {
    return (
      <div>
        <p>All of this year's novels:</p>
          <CardColumns>

            {this.props.novels.map(novel => {
              return <NovelCard key={novel.id} novel={novel} currentUser={this.props.currentUser}/>
            })}
          </CardColumns>
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
