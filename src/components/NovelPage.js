import React, { Component } from 'react';
import NovelInfo from './NovelInfo';
import CreateNovel from './CreateNovel';
import EditNovel from './EditNovel';
import NovelBadgesContainer from './NovelBadgesContainer';
import UserInfo from './UserInfo'
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";

class NovelPage extends Component {

  render() {
    const hasNovel = this.props.hasNovel
    return (
      <div>
        <Switch>
          <Route path="/novel/edit">{hasNovel ? <div><EditNovel novel={this.props.novel}/><NovelBadgesContainer/></div> : <Redirect to="/novel/create"/>}</Route>
          <Route path="/novel/create">{hasNovel ? <Redirect to="/novel"/> : <CreateNovel/>}</Route>

          <Route path="/novel">{hasNovel ? <div><NovelInfo/><NovelBadgesContainer/></div> : <Redirect to="/novel/create"/>}</Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    novel: state.currentNovel,
    hasNovel: !!state.currentNovel
  }
}



export default connect(mapStateToProps)(NovelPage);
