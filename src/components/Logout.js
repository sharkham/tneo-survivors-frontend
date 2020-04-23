import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/currentUser';
import { Button } from 'reactstrap';


const Logout = ({ logout }) => {
  return (
    <form onSubmit={logout}>
      <Button color="secondary" size="sm">Log Out</Button>
    </form>
  )
}

export default connect(null, { logout })(Logout)
