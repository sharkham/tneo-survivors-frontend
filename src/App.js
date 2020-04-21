import React, { Component } from 'react';
// import {
//   Switch,
//   Route,
//   Redirect
// } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import NavBar from './components/NavBar';
// import NovelPage from './components/NovelPage';
// import Login from './components/Login';
// import Signup from './components/Signup';
// import AllNovelsIndex from './components/AllNovelsIndex';
// import LoginOrSignup from './components/LoginOrSignup';
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'
import HomePage from './components/HomePage'
// import { getNovel } from './actions/currentNovel'

class App extends Component {

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.getCurrentUser()
      // this.props.getNovel()
    }
  }

  render() {
    const loggedIn = this.props.loggedIn
    return (
      <HomePage />
        // <div>
        //   <NavBar />
        //   {/* This will eventually lead to the view page */}
        //   {/* Should there be a main page here instead that has the routes to things?
        //   Would take conditional rendering out of App class */}
        //   <Switch>

        //     <Route exact path="/login">{loggedIn ? <Redirect to="/"/> : <Login />}</Route>
        //     <Route exact path="/signup">{loggedIn ? <Redirect to="/"/> : <Signup />}</Route>
        //     {/* Eventually change this to username, if they're current_user? */}
        //     <Route path="/novel">{loggedIn ? <NovelPage/> : <Redirect to="/"/>}</Route>
        //     <Route exact path="/" render={() => loggedIn ? <AllNovelsIndex/> : <LoginOrSignup/>} />
        //   </Switch>
        // </div>
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

