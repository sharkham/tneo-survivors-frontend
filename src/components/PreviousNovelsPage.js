import React from 'react';
import { connect } from 'react-redux';
import NovelCard from './NovelCard';
import { CardColumns } from 'reactstrap';

const PreviousNovelsPage = (props) => {
  return (
    <div>
      {/* {if (props.novels)} */}
      {props.novels.length > 0 ?
        <CardColumns>{props.novels.map(novel => <NovelCard key={novel.id} novel={novel} currentUser={props.currentUser} container="PreviousNovelsPage"/>)}</CardColumns>
        :
        <p>You don't have any previous novels yet!</p>}
      {/* Previous novels go here! */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    novels: state.otherUserNovels,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(PreviousNovelsPage);
