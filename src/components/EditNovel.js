import React from 'react';
import NovelForm from './NovelForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateNovel } from '../actions/novels';


const EditNovel = ({ novel, updateNovel, user }) => {
  const currentNovelDetails = {
    title: novel.title,
    summary: novel.summary,
    plan: novel.plan,
    goal: novel.goal
  }
  return (
    <div>
      <p>Edit your novel:</p>
      <NovelForm initialForm={currentNovelDetails} submitAction={updateNovel} user={user}/>
      <Link to="/novel">Back</Link>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    user: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateNovel: (novel, user) => dispatch(updateNovel(novel, user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditNovel);
