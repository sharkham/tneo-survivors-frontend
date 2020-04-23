import React, { Component } from 'react';
import { connect } from 'react-redux';
import NovelCard from './NovelCard';
import { Container, Col, Row } from 'reactstrap';

class AllNovelsIndex extends Component {
  render() {
    return (
      <div>
        <p>All of this year's novels:</p>
        <Container>
          <Row xs="3">

            {this.props.novels.map(novel => {
              return <Col><NovelCard key={novel.id} novel={novel} currentUser={this.props.currentUser}/></Col>
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    novels: state.allCurrentNovels,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(AllNovelsIndex);
