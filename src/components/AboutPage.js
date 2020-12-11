import React from 'react';
// import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div>
      <h1>TNEO Survivors Novel Tracker App</h1>
      <p>This is a novel tracking app! </p>
      <p>With this app, you can create a record of a novel and use the app to keep track of things like word count progress and badges for writing accomplishments, such as writing 1,000 words in one session.</p>
      <p>The app's home page displays all of the current novels, so you can see how other users are doing. Currently you can only create one novel project.</p>
      <p>You can find the Github repo for the app this app is adapted from <a target="_blank" rel="noopener noreferrer" href="https://github.com/sharkham/novel-tracker-frontend">here</a>.</p>
      <p>(Please note, this app is in beta.)</p>
      <p>Happy writing!</p>
    </div>
  );
}

export default AboutPage;
