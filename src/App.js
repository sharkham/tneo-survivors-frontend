import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import UserPage from './components/UserPage';
import Login from './components/Login';
import Signup from './components/Signup';
import AllNovelsIndex from './components/AllNovelsIndex';
import Home from './components/Home';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'

class App extends Component {

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.getCurrentUser()
    }
  }

  render() {
    const loggedIn = this.props.loggedIn
    return (
      <Router>
        <div>
          <NavBar />
          {/* This will eventually lead to the view page */}
          {/* Should there be a main page here instead that has the routes to things?
          Would take conditional rendering out of App class */}
          <Route exact path="/" render={() => loggedIn ? <AllNovelsIndex/> : <Home/>} />
          <Route exact path="/login">{loggedIn ? <Redirect to="/"/> : <Login />}</Route>
          <Route exact path="/signup" component={Signup}/>
          {/* {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />} */}
          {/* Eventually change this to username, if they're current_user? */}
          {/* <Route path="/profile" render={routerProps => loggedIn ? <UserPage {...routerProps}/> : }/> */}
          {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);

