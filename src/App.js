import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import UserPage from './components/UserPage';
import Login from './components/Login';
import Logout from './components/Logout';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }



  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Login />
          {/* This will eventually lead to the view page */}
          <Route exact path="/" render={() => <div>Home</div>} />
          {/* Eventually change this to username, if they're current_user? */}
          <Route path="/profile" render={routerProps => <UserPage {...routerProps}/>}/>
          {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);

