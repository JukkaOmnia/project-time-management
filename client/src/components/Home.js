import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render () {
    return (
      <div className="jumbotron text-center">
        <Link to="/presenters">Check Presentations</Link>
        <Link to="/presenters/add">Add Presentations</Link>
      </div>
    );
  }
}

export default Home;
