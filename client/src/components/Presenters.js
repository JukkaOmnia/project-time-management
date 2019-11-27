import React, { Component } from "react";
import Presenter from "./Presenter";
import { Table } from "reactstrap";
import StopClock from './StopClock';

class Presenters extends Component {
  renderPresenters = () => {
    console.log("presenters", this.props);
    let presenters = this.props.presenters;
    return presenters.map(presenter => {
      return <Presenter key={presenter._id} presenter={presenter} />;
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.presenters.length}</p>
        <div className="container">
          <h2>CUstomers Content</h2>
          <Table dark>
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>CustomerAdderss </th>
                <th>Project Topic</th>
                <th>pROJECT TWO</th>
                <th>Keyword</th>
                {/* <th>
                  <UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle tag="a" className="nav-link" caret>
                      Dropdown
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem tag="a" href="/blah" active>
                        Link
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </th> */}
                <th>Timer</th>
                <th>Clock Time</th>
                <th>Monitor</th>
              </tr>
            </thead>
          </Table>
        </div>

        {this.renderPresenters()}
      </div>
    );
  }
}

export default Presenters;
