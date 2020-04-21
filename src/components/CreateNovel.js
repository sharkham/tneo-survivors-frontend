import React from 'react';
import NovelForm from './NovelForm';
import { connect } from 'react-redux';
import { createNovel } from '../actions/novels';


const CreateNovel = (props) => {
  const emptyForm = {
    title: "",
    summary: "",
    plan: "",
    goal: ""
  }
  return (
    <div>
      <p>Create your novel: </p>
      <NovelForm initialForm={emptyForm} submitAction={props.createNovel} user={props.user}/>
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
    createNovel: (novel, user) => dispatch(createNovel(novel, user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateNovel);
