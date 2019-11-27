import React, { Component } from "react";
import { Card, CardBody, Button,Input } from "reactstrap";
import { Link } from "react-router-dom";
import "./PresenterDetail.css";

const PresenterDetail = props => {
  let post = props.presenters.find(post => {
    return post._id === props.match.params._id ;
  });
  //console.log("postid", post._id);
  //console.log("edited",props.isInEditMode)

  /*
  const editOneNode = () => {
    console.log("Name", post.name);
    const res = post.name.replace(post.name, "Nabin");
    console.log("newname", res);
  };
*/

  const deleteOneNode = () => {
    props.deletePresenter(post._id);
    props.history.push("/presenters");
  };
 
    
  const RenderDefaultView = () => {
    return (
      <div onDoubleClick={props.handelEditMode}>
        <CardBody>
        <Link to={`/presenters/`}>
          <Button className="backButton">Back</Button>{" "}</Link>
          <h3>Worker Detail</h3>
          <h5>Customer Name:<span>{post.name}</span></h5>
          <h5>Customer Address:<span>{post.evaluatorName}</span></h5>
          <h5>Project Topic:<span>{post.presentationTopic}</span></h5>
          <h5>Project Topic 2:<span>{post.article}</span></h5>
          <h5>Keywords:<span>{post.keyword}</span></h5>
          <h5>Date:<span>{post.currentTime}</span></h5>
          <div>Summary:{post.summary}</div>
          <div className="buttonPresenterDetail">
          <Link to={`/presenters/edit/${post._id}`}>
          <Button className="editButton">Edit</Button>{" "}</Link>
          <Button className="deleteButton"
          onClick={e =>
          window.confirm("Are you sure you wish to delete this item?") &&
          deleteOneNode(e)}>
          Delete
          </Button>
         </div>
        
        </CardBody>
      </div>
    );
  };

  return (
    <div className="container test">
      <div>
        <Card>
          <CardBody> 
          <RenderDefaultView />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PresenterDetail;
