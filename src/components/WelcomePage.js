import React from 'react';
// import Login from './Login';
// import Signup from './Signup';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <h4>Welcome!</h4>
      <p>This is a novel contest app! Users can make a new novel for every year they're participating and keep track of things like word count and badges earned.</p>
      <p>Please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link> to continue.</p>
    </div>
  );
}

export default WelcomePage;
