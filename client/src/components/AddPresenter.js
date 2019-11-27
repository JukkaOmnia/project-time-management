import React, { Component } from "react";
import axios from "axios";
import "./AddPresentation.css";
import {Col,Row, Button, Form, FormGroup, Label, Input } from "reactstrap";


function displayDateTime () {
  var today = new Date();
  var year = today.getFullYear();
  var month = new Array();
  month[0] = "1";
  month[1] = "2";
  month[2] = "3";
  month[3] = "4";
  month[4] = "5";
  month[5] = "6";
  month[6] = "7";
  month[7] = "8";
  month[8] = "9";
  month[9] = "10";
  month[10] = "11";
  month[11] = "12";
  var d = new Date();
  var n = month[d.getMonth()];
  var date = today.getDate();
  var hours = today.getHours();
  var minute = today.getMinutes();
  var newtime =(`${date}/${n}/${year} ${hours}:${minute} `); 
  return newtime ;
}


class AddPresenter extends Component {
  state = {
    name: "",
    age: "",
    evaluatorName: "",
    presentationTopic: "",
    article: "",
    monitor: "",
    currentTime:new Date(),
    keyword:[""],
    summary:"",
    errors: {}
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  
  /*
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("/presenters", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(err => console.log(err));
  };
*/
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    console.log("keyword",this.state.keyword)
    let {
      name,
      evaluatorName,
      presentationTopic,
      currentTime,
      keyword,
      article,
      summary
    } = this.state;
    let data = { name,evaluatorName,currentTime,presentationTopic,keyword,article,summary};
    axios
      .post("/presenters", data)
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
    console.log("props",this.props)
    const { errors } = this.state;
    return (
      <div className="container addPresentation">
      <h3>Add Presenter</h3>
        <Form onSubmit={this.handleSubmit} method="POST" >
        <Row form>
        <Col md={4}>
          <FormGroup>
            <Label>Customer Name:</Label>{" "}
            <Input
              className="custom-input"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Presenter Name"
            />
            <p style={{ color: "red" }}>{errors.name}</p>
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
            <Label>Customer Adderss</Label>{" "}
            <Input
              type="text"
              name="evaluatorName"
              value={this.state.evaluatorName}
              onChange={this.handleChange}
              placeholder="Evaluator Name"
            />
            <p style={{ color: "red" }}>{errors.evaluatorName}</p>
          </FormGroup>
          </Col>
          <Col md={4}>
          <FormGroup>
            <Label>Project Topic</Label>
            <Input
              type="text"
              name="presentationTopic"
              value={this.state.presentationTopic}
              onChange={this.handleChange}
              placeholder="Presentation Topic"
            />
            <p style={{ color: "red" }}>{errors.presentationTopic}</p>
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
            <p style={{ color: "red" }}>{errors.article}</p>
          </FormGroup>
          <FormGroup>
            <Label>Keyword</Label>
            <p>Add multiple Keyword seperated with coma</p>
            <Input
              type="text"
              name="keyword"
              value={this.state.keyword.concat("")}
              onChange={this.handleChange}
              placeholder="Keyword"
            />
            <p style={{ color: "red" }}>{errors.keyword}</p>
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
            <Button color="primary">Add Customers</Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default AddPresenter;
