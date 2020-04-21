import React from 'react';
import NovelForm from './NovelForm';

const EditNovel = (props) => {
  const currentNovelDetails = {
    title: props.novel.title,
    summary: props.novel.summary,
    plan: props.novel.plan,
    goal: props.novel.goal
  }
  return (
    <div>
      <p>Edit your novel:</p>
      <NovelForm initialForm={currentNovelDetails}/>
    </div>
  );
}

export default EditNovel;
