import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PartyB from "../page/user/PartyB";
import PartyA from "../page/user/PartyA";
import AddParty from "../page/user/AddParty";

class RightContent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="right-content">
        <Switch>
          <Route path="/user/" component={PartyA} />
          <Route path="/user/party-b" component={PartyB} />
          <Route path="/user/party-a" component={AddParty} />
          <Route path="/user/add-party" component={AddParty} />
        </Switch>
      </div>
    );
  }
}

export default RightContent;
