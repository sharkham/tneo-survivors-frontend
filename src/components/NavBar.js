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
  NavLink
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
          { this.props.currentUser ? <NavItem><NavLink tag={Link} to="/about">About</NavLink></NavItem> : "" }
          { this.props.currentUser ? <NavItem><NavLink tag={Link} to="/novel">Novel</NavLink></NavItem> : "" }
        </Nav>
        {/* <ul> */}
          {/* { this.props.currentUser ? <li>Welcome, {this.props.currentUser.name}</li> : "" } */}
          {/* <li><Link to="/">Home</Link></li> */}
          {/* { this.props.currentUser ? <li><Link to="/about">About</Link></li> : ""} */}
          {/* { this.props.currentUser ? <li><Link to="/previous_novels">Previous Novels </Link></li> : ""} */}
          {/* Add previous novels page here later */}
          {/* <li><Link to="/profile">Profile</Link></li> */}
          {/* { this.props.currentUser ? <li><Logout /></li> : ""} */}
        {/* </ul> */}
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
