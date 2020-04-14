import React, { Component } from "react";
import Header from "../common/Header";
import Content from "../common/Content";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  Link
} from "react-router-dom";
import "./App.css";
export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Content />
        </div>
      </Router>
    );
  }
}
