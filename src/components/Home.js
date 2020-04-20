import React from 'react';
import Login from './Login';
import Signup from './Signup';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h4>Welcome, please <Link to="/signup">sign up</Link> or <Link to="/login">log in</Link>.</h4>
    </div>
  );
}

export default Home;
