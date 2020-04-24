import React, { Component } from 'react';
import Logout from './Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from '../actions/currentUser';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';


class NavBar extends Component {

  // componentDidMount() {
  //   this.props.getCurrentUser()
  // }


  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Novel Contest App</NavbarBrand>
        <Nav className="mr-auto" navbar>
          {/* For not logged in users: */}
          { !this.props.currentUser ? <NavItem><NavLink tag={Link} to="/login">Log In</NavLink></NavItem> : "" }
          { !this.props.currentUser ? <NavItem><NavLink tag={Link} to="/signup">Sign Up</NavLink></NavItem> : "" }

          {/* For logged in users:          */}
          { this.props.currentUser ? <NavItem><NavLink tag={Link} to="/about">About</NavLink></NavItem> : "" }
          { this.props.currentUser ? <NavItem><NavLink tag={Link} to="/novel">Novel</NavLink></NavItem> : "" }
          { this.props.currentUser ? <NavItem><NavLink tag={Link} to="/previous_novels">Previous Novels</NavLink></NavItem> : "" }
        </Nav>
        { this.props.currentUser ? <NavbarText><strong>Welcome, {this.props.currentUser.name}!</strong></NavbarText> : "" }
        { this.props.currentUser ? <NavbarText><Logout /></NavbarText> : ""}
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(NavBar);
