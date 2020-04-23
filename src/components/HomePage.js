import React, { Component } from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import NavBar from './NavBar';
import NovelPage from './NovelPage';
import Login from './Login';
import Signup from './Signup';
import AllNovelsIndex from './AllNovelsIndex';
import LoginOrSignup from './LoginOrSignup';
import AboutPage from './AboutPage'
import { connect } from 'react-redux';
// import { getCurrentUser } from '../actions/currentUser'
// import { getNovel } from './actions/currentNovel'

class HomePage extends Component {

  render() {
    const loggedIn = this.props.loggedIn
    return (
        <div>
          <NavBar />
          {/* This will eventually lead to the view page */}
          {/* Should there be a main page here instead that has the routes to things?
          Would take conditional rendering out of HomePage class */}
          <Switch>

            <Route exact path="/login">{loggedIn ? <Redirect to="/"/> : <Login />}</Route>
            <Route exact path="/signup">{loggedIn ? <Redirect to="/"/> : <Signup />}</Route>
            <Route exact path="/about">{loggedIn ? <AboutPage /> : <Redirect to="/"/>}</Route>
            {/* Eventually change this to username, if they're current_user? */}
            <Route path="/novel">{loggedIn ? <NovelPage/> : <Redirect to="/"/>}</Route>
            <Route path="/previous_novels">{loggedIn ? <PreviousNovelsPage/> : <Redirect to="/"/>}</Route>
            <Route exact path="/" render={() => loggedIn ? <AllNovelsIndex/> : <LoginOrSignup/>} />
          </Switch>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(HomePage);

