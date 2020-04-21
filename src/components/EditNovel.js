import React from 'react';
import NovelForm from './NovelForm';

const EditNovel = ({ novel }) => {
  const currentNovelDetails = {
    title: novel.title,
    summary: novel.summary,
    plan: novel.plan,
    goal: novel.goal
  }
  return (
    <div>
      <p>Edit your novel:</p>
      <NovelForm initialForm={currentNovelDetails}/>
    </div>
  );
}

export default EditNovel;
