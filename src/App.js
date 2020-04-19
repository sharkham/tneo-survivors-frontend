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
import { connect } from 'react-redux';
import { getCurrentUser } from './actions/currentUser'

class App extends Component {

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.getCurrentUser()
    }
  }

  // loginOrLogout = () => {
  //   if (!!this.props.currentUser) {
  //     return <Logout />
  //   } else {
  //     return <Login />
  //   }
  // }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          {/* This will eventually lead to the view page */}
          {/* Should there be a main page here instead that has the routes to things?
          Would take conditional rendering out of App class */}
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/login" component={Login}/>
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

