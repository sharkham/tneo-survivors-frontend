import React from 'react';
// import Login from './Login';
// import Signup from './Signup';
import { Link } from 'react-router-dom';

const LoginOrSignup = () => {
  return (
    <div>
      <p>Welcome, please <Link to="/signup">sign up</Link> or <Link to="/login">log in</Link>.</p>
    </div>
  );
}

export default LoginOrSignup;
