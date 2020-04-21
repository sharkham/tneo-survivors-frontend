import React from 'react';
import NovelForm from './NovelForm'

const CreateNovel = () => {
  const emptyForm = {
    title: "",
    summary: "",
    plan: "",
    goal: ""
  }
  return (
    <div>
      <p>Create your novel: </p>
      <NovelForm initialForm={emptyForm}/>
    </div>
  );
}

export default CreateNovel;
