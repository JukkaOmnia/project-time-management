import React, { Component } from "react";
import axios from "axios";
import "./AddPresentation.css";
import {Col,Row, Button, Form, FormGroup, Label, Input } from "reactstrap";

class EditPresenter extends Component {
  state = {
    name: "",
    evaluatorName: "",
    presentationTopic: "",
    article: "",
    keyword:[""],
    currentTime:new Date(),
    monitor: "",
    errors: {}
  };


  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillMount = ()=> {
    let number = 0;
    this.props.presenters.forEach((person,index) => {if (person._id === this.props.match.params._id)
      {number = index }})
  this.setState({
      name: this.props.presenters[number].name,
      evaluatorName:this.props.presenters[number].evaluatorName,
      presentationTopic:this.props.presenters[number].presentationTopic,
      keyword:this.props.presenters[number].keyword,
      currentTime:this.props.presenters[number].currentTime,
      article:this.props.presenters[number].article,
      _id:this.props.presenters[number].id
    })
    console.log("thsi one",this.props.name)
    console.log("myIDEdit",this.props._id)
} 


handleSubmit = e => {
  e.preventDefault();
  const _id = this.props.match.params._id;
  //console.log('IIIIDDDDDDD*' ,this.props.match.params._id);
  
  //console.log('stateeeeeeeeeeeeeeee: ',this.state);
  let {
    name,
    evaluatorName,
    presentationTopic,
    article,
    currentTime,
    keyword
  } = this.state;
  let data = { name, evaluatorName, presentationTopic,currentTime, article,keyword};
  this.props.editPresenter(_id, data);
  axios
    .put(`/presenters/edit/${_id}`,data)
    .then(response => {
      this.setState({
        errors: {}
      });
      console.log("newResponse", response);
    })
    .catch(err => {
      console.log("err", err);
      return this.setState({
        errors: err.response.data
      });
    });
  console.log("This is validator", this.state);
  this.props.history.push("/presenters");
};

 
  render() {
    
    {/*console.log("thisisEditPROPS",this.props.presenters)
    console.log("IDFROMedIT", this.props.match.params)
    console.log("HISTORYedIT", this.props.history)
    console.log("name",this.state.name)
  console.log("match",this.props.match);*/}  
      
    return (
      <div className="container addPresentation">
        <h3>Edit Presenter</h3>
        <Form onSubmit={this.handleSubmit} >
        <Row form>
        <Col md={4}>
          <FormGroup>
            <Label>Presenter Name:</Label>{" "}
            <Input
              className="custom-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Presenter Name"
            />
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
            <Label>Evaluator Name</Label>{" "}
            <Input
              type="text"
              name="evaluatorName"
              value={this.state.evaluatorName}
              onChange={this.handleChange}
              placeholder="Evaluator Name"
            />
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
            <Label>Presentation Topic</Label>
            <Input
              type="text"
              name="presentationTopic"
              value={this.state.presentationTopic}
              onChange={this.handleChange}
              placeholder="Presentation Topic"
            />
          </FormGroup>
          </Col>
          </Row>
          <FormGroup>
            <Label>Article</Label>
            <Input
              type="text"
              name="article"
              value={this.state.article}
              onChange={this.handleChange}
              placeholder="Article"
            />
          </FormGroup>
          <FormGroup>
            <Label>Keyword</Label>
            <p>Add multiple Keyword seperated with coma</p>
            <Input
              type="text"
              name="keyword"
              value={this.state.keyword}
              onChange={this.handleChange}
              placeholder="Keyword"
            />
          </FormGroup>
          <FormGroup>
            <Label>Current Time</Label>
            <Input
              type="text"
              name="currentTime"
              value={this.state.currentTime}
              onChange={this.handleChange}
            />
           </FormGroup>
           <FormGroup>
            <Label for="exampleText">Summary</Label>
            <Input
              type="textarea"
              rows="4" cols="50"
              id="exampleText" 
              name="summary"
              value={this.state.summary}
              onChange={this.handleChange}
              placeholder="Summary about the topic"
            />
           </FormGroup>
         
          <div>
            <Button color="primary">Edit Presenters</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default EditPresenter;
