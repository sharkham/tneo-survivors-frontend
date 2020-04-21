import React from 'react';
import NovelForm from './NovelForm';
import { Link } from 'react-router-dom';

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
      <Link to="/novel">Back</Link>
    </div>
  );
}

export default EditNovel;
