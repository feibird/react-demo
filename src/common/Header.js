import React, { Component } from "react";
import { Menu, Icon, Dropdown, Button } from "antd";
import logoUrl from "../images/logo.png";
import "../css/common.less";
import { getJson } from "../Service/jsonService";
const { SubMenu } = Menu;

export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    const data = getJson("header");
    console.log(data);
    return (
      <header className={"App-header"}>
        <div className="header-logo">
          <img src={logoUrl} />
        </div>
        <div className="header-menu">
          <Menu theme="dark" onClick={this.handleClick} mode="horizontal">
            {data.topMenu.map((item, key) => {
              return (
                <Menu.Item key={key}>
                  <Icon type={item.icon} />
                  {item.name}
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
