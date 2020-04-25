import React, { Component } from 'react';
import { Form, Label, Input, FormGroup, Button, FormText, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import { connect } from 'react-redux';

class UpdateWordCountForm extends Component {
  state = {
    addedWords: 0
    // wordCount: this.props.wordcount
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  updateNovel = (updatedWordCount) => {
    return {
      ...this.props.novel,
      wordcount: updatedWordCount
    }
  }

  // updateWordCount = (wordCount, addedWords) => {
  //   if (typeof wordCount === "number" && typeof addedWords === "number") {

  //   }
  // }

  handleSubmit = (event) => {
    event.preventDefault()
    const updatedWordCount = this.props.wordCount + parseInt(this.state.addedWords)
    // if (typeof updatedWordCount === "number") {
      const updatedNovel = this.updateNovel(updatedWordCount)
      this.props.patchWordCount(updatedNovel)
      this.setState({
        ...this.state,
        addedWords: 0
      })
    // } else {
    //   alert("Please enter a number")
    // }
    //this also currently adds badges to currentNovel,
    //which currentNovel didn't have here because we were getting it from the user object
  }

  render() {
    return (
      <Card>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <CardHeader>
              <Label for="addedWords">Update Word Count: </Label>
            </CardHeader>
            <CardBody>
              <CardText>
                <Input id="addedWords" type="number" min="1" name="addedWords" onChange={this.handleChange} value={this.state.addedWords}/>
                <FormText>Please enter the number of words you wish to add.</FormText>
                <Button color="secondary">Submit</Button>
              </CardText>
            </CardBody>

          </FormGroup>
        </Form>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    wordCount: state.currentNovel.wordcount
  }
}

export default connect(mapStateToProps)(UpdateWordCountForm);

