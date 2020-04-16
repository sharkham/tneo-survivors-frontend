import React from 'react';

const Login = () => {
  return (
    <form>
      <input name="username" placeholder="username" type="text"/>
      <input name="password" placeholder="password" type="password"/>
      <input type="submit" value="Log In"/>
    </form>
  );
}

export default Login;


