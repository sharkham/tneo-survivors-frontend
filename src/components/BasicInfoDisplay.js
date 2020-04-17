import React from 'react';

const BasicInfoDisplay = (props) => {
  return (
    <div>
        <p>Title: {props.novel.title}</p>
        <p>Summary: {props.novel.summary}</p>
        <p>Plan of Attack: {props.novel.plan}</p>
        <p>Goal: {props.novel.goal}</p>
        <p>Word Count: {props.novel.wordcount}</p>
    </div>
  );
}

export default BasicInfoDisplay;
