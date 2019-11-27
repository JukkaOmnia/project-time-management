import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Presenters from "./components/Presenters";
import Home from "./components/Home";
import Header from "./components/Header";

import AddPresenter from "./components/AddPresenter";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PresenterDetail from "./components/PresenterDetail";
import EditPresenter from "./components/EditPresenter";


class App extends Component {
  state = {
    presenters: [],
    errors: {},
  };
  componentDidMount() {
    axios.get("/presenters").then(response => {
      console.log(response);
      this.setState({
        presenters: response.data
      });
    });
  }
 
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    let {
      name,
      evaluatorName,
      presentationTopic,
      article,
      keyword,
      summary
    } = this.state;
    let data = { name, evaluatorName,presentationTopic,article,keyword,summary};
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
  };
 


  deletePresenter = _id => {
    const presenters = this.state.presenters.filter(
      presenter => presenter._id !== _id
    );
    console.log("deleted", presenters);
    this.setState({
      presenters,
      flag: true
    });
    axios
      .delete(`/presenters/${_id}`)
      .then(response => {
        //console.log ('I am responding',response);
      })
      .catch(err => console.log(err));
    console.log("First", _id);
  };


  editPresenter = (_id, data) => {
    const presenters = this.state.presenters.filter(
      presenter => presenter._id !== _id
    );
    console.log("edited", presenters);
    this.setState({
      presenters,
      flag: true
    });
    axios
      .put(`/presenters/edit/${_id}`, data)
      .then(response => {
        //console.log ('I am responding',response);
      })
      .catch(err => console.log(err));
    console.log("First", _id);
  };


  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/presenters/add"
                render={props => (
                  <AddPresenter
                    {...props}
                    presenters={this.state.presenters}
                    errors= {this.state.errors}
                  />
                )}
              />
             
               <Route
                path="/presenters/edit/:_id"
                render={props => (
                  <EditPresenter
                  {...props}
                  presenters={this.state.presenters}
                  errors= {this.state.errors}
                  editPresenter={this.editPresenter}
                  handleEdit={this.handleEdit}
                  />
                )}
              />
              <Route
                path="/presenter/:_id"
                render={props => (
                  <PresenterDetail
                    {...props}
                    presenters={this.state.presenters}
                    deletePresenter={this.deletePresenter}
                    isEditMode={this.state.isEditMode}
                    name={this.state.name}
                    keyword={this.state.keyword}
                    evaluatorName ={this.state.evaluatorName}
                    presentationTopic ={this.state.presentationTopic}
                    article ={this.state.article}
                    keyword ={this.state.keyword}
                    summary={this.state.summary}
                    monitor = {this.state.monitor}
                    currentTime = {this.state.currentTime}
                    updateComponentValue={this.updateComponentValue}
                    handelEditMode={this.handelEditMode}
                    handleChange ={this.handleChange}
                    handleCancel = {this.handleCancel}
                  />
                )}
              />
              <Route exact
                path="/presenters"
                render={props => (
                  <Presenters {...props} presenters={this.state.presenters} />
                )}
              />
            </Switch>
          </div>
        </BrowserRouter>
        
      </div>
    );
  }
}

export default App;
