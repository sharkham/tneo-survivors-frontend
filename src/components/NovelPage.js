import React, { Component } from 'react';
import NovelInfo from './NovelInfo';
import CreateNovel from './CreateNovel';
import EditNovel from './EditNovel';
import NovelBadgesContainer from './NovelBadgesContainer';
import UpdateWordCountForm from './UpdateWordCountForm';
import { patchWordCount } from '../actions/novels';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import { Col, Row, Container, CardColumns } from 'reactstrap';

class NovelPage extends Component {

  render() {
    const hasNovel = this.props.hasNovel
    return (
      <div>


        <Container>
          <Row>
            <Switch>
              <Route path="/novel/edit">
                {hasNovel ?
                  <div>

                      <Col>
                        <EditNovel novel={this.props.novel}/>
                      </Col>
                      <br/>
                      <Col>
                        <NovelBadgesContainer/>
                      </Col>

                  </div>
                  : <Redirect to="/novel/new"/>
                }
              </Route>
              <Route path="/novel/new">
                {hasNovel ?
                  <Redirect to="/novel"/>
                  : <Col><CreateNovel/></Col>
                }
              </Route>
              <Route path="/novel">
                {hasNovel ?
                  <div>
                    <Col>
                      <NovelInfo/>
                      <br/>
                      <UpdateWordCountForm
                        novel={this.props.novel}
                        wordcount={this.props.novel.wordcount}
                        patchWordCount={this.props.patchWordCount}
                        />
                      <br/>
                      <NovelBadgesContainer/>
                    </Col>
                  </div>
                  : <Redirect to="/novel/new"/>
                }
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

const mapDispatchToProps = dispatch => {
  return {
    // getNovel: user => dispatch(getNovel(user)),
    patchWordCount: novel => dispatch(patchWordCount(novel))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NovelPage);
