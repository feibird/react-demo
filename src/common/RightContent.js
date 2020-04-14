import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getMenu } from "../store/actions/menuAction";
import PartyB from "../page/user/PartyB";
import PartyA from "../page/user/PartyA";

class RightContent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="right-content">
        <Route path="/party-b" component={PartyB} />
        <Route path="/party-a" component={PartyA} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menuReducers.menu
  };
}

function mapActionToProps(dispatch) {
  return {
    getMenu: () => dispatch(getMenu())
  };
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(RightContent);
