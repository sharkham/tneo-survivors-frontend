import React, { Component } from 'react';
import Logout from './Logout';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
  NavbarToggler,
  NavbarText
} from 'reactstrap';


class NavBar extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }


  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={Link} to="/">Novel Tracker App</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {/* For not logged in users: */}
            { !this.props.currentUser ? <NavItem><NavLink tag={Link} to="/login">Log In</NavLink></NavItem> : "" }
            { !this.props.currentUser ? <NavItem><NavLink tag={Link} to="/signup">Sign Up</NavLink></NavItem> : "" }

            {/* For logged in users:          */}
            { this.props.currentUser ? <NavItem><NavLink tag={Link} to="/">{new Date().getFullYear()} Contest Novels</NavLink></NavItem> : "" }
            { this.props.currentUser ?
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Your Novels
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink tag={Link} to="/novel">Current Novel</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={Link} to="/previous_novels">Previous Novels</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            :
            ""
            }
            { this.props.currentUser ?
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More Info
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink tag={Link} to="/about">About</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink tag={Link} to="/guidelines">Contest Guidelines</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            :
            ""
            }
          </Nav>
        </Collapse>
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
