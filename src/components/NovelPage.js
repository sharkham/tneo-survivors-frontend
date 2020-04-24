import React, { Component } from 'react';
import NovelInfo from './NovelInfo';
import CreateNovel from './CreateNovel';
import EditNovel from './EditNovel';
import NovelBadgesContainer from './NovelBadgesContainer';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import { Col, Row, Container } from 'reactstrap';

class NovelPage extends Component {

  render() {
    const hasNovel = this.props.hasNovel
    return (
      <div>
        <Container>
          <Row>
            <Switch>
              <Route path="/novel/edit">
                {hasNovel ? <div><Col><EditNovel novel={this.props.novel}/></Col><Col><NovelBadgesContainer/></Col></div> : <Redirect to="/novel/create"/>}
              </Route>
              <Route path="/novel/create">
                {hasNovel ? <Redirect to="/novel"/> : <Col><CreateNovel/></Col>}
              </Route>
              <Route path="/novel">
                {hasNovel ? <div><Col><NovelInfo/></Col><Col><NovelBadgesContainer/></Col></div> : <Redirect to="/novel/create"/>}
              </Route>
            </Switch>
          </Row>
        </Container>
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
