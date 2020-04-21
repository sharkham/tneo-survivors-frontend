import React from 'react';
import NovelForm from './NovelForm';

const EditNovel = (props) => {
  const currentNovelDetails = {
    title: props.title,
    summary: props.summary,
    plan: props.plan,
    goal: props.goal
  }
  return (
    <div>
      <p>Edit your novel:</p>
      <NovelForm initialForm={currentNovelDetails}/>
    </div>
  );
}

export default EditNovel;
