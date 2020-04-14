import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getMenu } from "../store/actions/menuAction";
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

function mapStateToProps(state) {
  return {
    menu: state.menuReducers.menu,
  };
}

function mapActionToProps(dispatch) {
  return {
    getMenu: () => dispatch(getMenu()),
  };
}

export default connect(mapStateToProps, mapActionToProps)(RightContent);
