import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <p>This is a novel tracking app for novel contests! </p>
      <p>It was designed for a novel contest that runs every year, throughout the year. With this app, you can create a record of your novel for the year and use the app to keep track of things like word count progress and badges for writing accomplishments, such as writing 1,000 words in one session.</p>
      <p>The app's home page displays all of the year's novels, so you can see how others participating in the contest are doing, and each new year, when you sign on to the app, you will be prompted to create a new novel for that year's contest. Your previous novels will then be visible on the <Link to="/previous_novels">Previous Novels</Link> page.</p>
      <p>You can find this app's Github repo <a target="_blank" rel="noopener noreferrer" href="https://github.com/sharkham/novel-tracker-frontend">here</a>.</p>
      <p>(Please note, this app is in beta.)</p>
      <p>Happy writing!</p>
    </div>
  );
}

export default AboutPage;
