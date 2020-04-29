import React from 'react';
// import Login from './Login';
// import Signup from './Signup';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div>
      <p>Welcome, please <Link to="/login">log in</Link> or <Link to="/signup">sign up</Link>.</p>
    </div>
  );
}

export default WelcomePage;
