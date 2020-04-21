import React, { Component } from 'react';
import NovelInfo from './NovelInfo';
import CreateNovel from './CreateNovel';
import EditNovel from './EditNovel';
import NovelBadgesContainer from './NovelBadgesContainer';
import UserInfo from './UserInfo'
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";

class NovelPage extends Component {


  // createNovelPrompt = () => {
  //   if (!this.novel) {
  //     return <p>Create a novel for this year?</p>
  //   } else {
  //     return <p>Novel exists, cool</p>
  //   }
  // }

  // renderUsername = () => {
  //   if (!!this.props.user) {
  //     return this.props.user.name
  //   }
  // }

  render() {
    return (
      <div>
        {/* Add conditional rendering--if User has no novel User is prompted to create novel */}
        {/* {this.createNovelPrompt()} */}
        {/* <UserInfo name={this.props.user.name} username={this.props.user.username}/> */}
        <Switch>
          <Route
            path="/novel/edit"
            render={data => {
              return (
                <EditNovel
                  novelId={data.match.params.novelId}
                />
              );
            }}
          />
          {/* <Route
            path="/novel/create"
            render={data => {
              return (
                <EditNovel
                  novelId={data.match.params.novelId}
                />
              );
            }}
          /> */}
          <Route path="/novel/create">{this.props.hasNovel ? <Redirect to="/novel"/> : <CreateNovel/>}</Route>

          <Route path="/novel">{this.props.hasNovel ? <div><NovelInfo/><NovelBadgesContainer/></div> : <Redirect to="/novel/create"/>}</Route>

          {/* <Route
            path="/novel"
            render={data => {
              return (
                <div>Novel Info</div>
                // <NovelInfo novelId={data.match.params.novelId} />
              );
            }}
          /> */}
        </Switch>
        {/* <CreateNovel /> */}
        {/* <EditNovel novel={this.props.novel}/> */}
        {/* <NovelInfo /> */}
        {/* <NovelBadgesContainer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.currentUser,
    novel: state.currentNovel,
    hasNovel: !!state.currentNovel
  }
}



export default connect(mapStateToProps)(NovelPage);
