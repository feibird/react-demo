import React, { Component } from "react";
import { Menu, Icon, Dropdown, Button } from "antd";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  Link,
} from "react-router-dom";
import logoUrl from "../images/logo.png";
import "../css/common.less";
import { getJson } from "../util/jsonService";
import { http } from "../util/httpService";
const { SubMenu } = Menu;

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      topMenu: [],
    };
  }

  componentDidMount() {
    this.getMenu();
  }

  getMenu = () => {
    http("/menu/top").then((res) => {
      console.log(res);
      this.setState({ topMenu: res.data.data });
    });
  };

  render() {
    const data = getJson("header");
    const { topMenu } = this.state;
    return (
      <header className={"App-header"}>
        <div className="header-logo">
          <img src={logoUrl} />
        </div>
        <div className="header-menu">
          <Menu theme="dark" onClick={this.handleClick} mode="horizontal">
            {topMenu.map((item, key) => {
              return (
                <Menu.Item key={key}>
                  <Icon type={item.icon} />
                  <Link className="topMenu" to={item.url}>
                    {item.title}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
        <div className="header-user">
          <Dropdown
            className={"user-dropDown"}
            overlay={
              <Menu>
                {data.user.map((item, key) => {
                  return [
                    key != 0 && <Menu.Divider />,
                    <Menu.Item key={key}>{item.name}</Menu.Item>,
                  ];
                })}
              </Menu>
            }
            trigger={["click"]}
          >
            <a className="ant-dropdown-link" href="#">
              <Icon type="user" />
              风陵渡 <Icon type="down" />
            </a>
          </Dropdown>
        </div>
      </header>
    );
  }
}
