import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import StopClock from './StopClock';

const  Presenter  = (props) => {
    const {
      name,
      evaluatorName,
      presentationTopic,
      article,
      _id,
      keyword,
      monitor,
      currentTime,
      summary
    } = props.presenter;
    console.log("new",keyword)
    console.log("newSUmmaary",summary)
    
    return (
      
      <div>
        <div className="container">
          <Table dark className="tableData">
            <tr>
              <td>{name}</td>
              <td>{evaluatorName}</td>
              <td>{presentationTopic}</td>
              <td>{article}</td>
              <td>{keyword}</td>
              <td>{currentTime}</td>
              <td><StopClock/></td>
              <td>{summary}</td>
              <td>
                <Link to={`/presenter/${_id}`}>
                  <FaEye />{" "}
                </Link>
                <Link to={`/presenters/edit/${_id}`}>
                <FaEdit /></Link>
                <FaTrash style={{ color: "red" }} />
                {monitor}
              </td>
            </tr>
          </Table>
        </div>
      </div>
    );
  }


export default Presenter;
