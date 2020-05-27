import React, { Component } from 'react';
import SmallBadgesContainer from './SmallBadgesContainer';
import { Card, CardHeader, CardText, CardTitle, CardBody, Progress, Popover, PopoverBody, Button } from 'reactstrap';
import { progressbar } from '../helpers/progressbar'

class NovelCard extends Component {

  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  render() {
    return (
      <Card>
        <CardHeader>
          {this.props.novel.title}
          {this.props.container === "PreviousNovelsPage" ? <> ({this.props.novel.year})</> : ""}
          <Progress value={progressbar(this.props.novel.wordcount, this.props.novel.goal)}/>
          <small className="text-muted">({this.props.novel.wordcount} / {this.props.novel.goal})</small>
        </CardHeader>
        <CardBody>
          {this.props.container !== "PreviousNovelsPage" ? <CardTitle>by {this.props.novel.user.name}</CardTitle> : ""}
          {/* <CardText>{novel.summary}</CardText> */}
          {this.props.container === "PreviousNovelsPage" ? <CardText>Summary: {this.props.novel.summary}</CardText> : ""}
          <CardText>Plan of Attack: {this.props.novel.plan}</CardText>
          {this.props.container === "PreviousNovelsPage" ? <CardText>Goal: {this.props.novel.goal}</CardText> : ""}
          {this.props.container === "PreviousNovelsPage" ? <CardText>Final Word Count: {this.props.novel.wordcount}</CardText> : ""}
          <SmallBadgesContainer badges={this.props.novel.badges} />
          {this.props.container !== "PreviousNovelsPage" ?
          <div>
            <Button id={"button-" + this.props.novel.id} color="secondary" style={{ marginBottom: '1rem' }} type="button">Summary</Button>
            <Popover placement="bottom" isOpen={this.state.isOpen} target={"button-" + this.props.novel.id} toggle={this.toggle}>
              <PopoverBody>{this.props.novel.summary}</PopoverBody>
            </Popover>
          </div>
          : ""}
        </CardBody>
      </Card>
    );
  }

}

// = ({ novel, currentUser, container }) => {

// }

export default NovelCard;
