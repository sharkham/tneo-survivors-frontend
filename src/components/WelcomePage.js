import React from 'react';
// import Login from './Login';
// import Signup from './Signup';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h1>TNEO Survivors Novel Tracker App</h1>
      <p>This is a novel tracker app for running novel contests! Users can make a new novel for every year they're participating and keep track of things like word count and badges earned.</p>
      <p>Please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> to continue.</p>
      <p>(Please note part of this app is hosted via a free server that sleeps when not in use. It may take a few extra seconds to wake up when you first access the site.)</p>
    </div>
  );
}

export default WelcomePage;
