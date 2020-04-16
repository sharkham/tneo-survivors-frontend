import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          {/* This will eventually lead to the view page */}
          <Route exact path="/" render={() => <div>Home</div>} />
          {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
        </div>
      </Router>
    );
  }
}

export default App;

