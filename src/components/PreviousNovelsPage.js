import React from 'react';
import { connect } from 'react-redux';
import NovelCard from './NovelCard';
import { CardColumns } from 'reactstrap';

const PreviousNovelsPage = (props) => {
  return (
    <CardColumns>
      {/* {if (props.novels)} */}
      {props.novels.length > 0 ? props.novels.map(novel => <NovelCard key={novel.id} novel={novel} currentUser={props.currentUser} container="PreviousNovelsPage"/>) : <p>You don't have any previous novels yet!</p>}
      {/* Previous novels go here! */}
    </CardColumns>
  );
}

const mapStateToProps = state => {
  return {
    novels: state.otherUserNovels,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(PreviousNovelsPage);
