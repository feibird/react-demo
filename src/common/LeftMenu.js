import React, { Component } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  Link,
} from "react-router-dom";
import { Icon, Menu, Button } from "antd";
import { getJson } from "../util/jsonService";
import "../css/common.less";
import { http } from "../util/httpService";
const { SubMenu } = Menu;

class LeftMenu extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      menu: [],
    };
  }

  toggleCollapsed = (e) => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    http('/menu/left').then(res=>{
      console.log(res.data.data)
      this.setState({menu:res.data})
    })
  }

  componentWillReceiveProps() {
    console.log(this.props);
  }

  render() {
    const menu = getJson("leftMenu");
    
    return (
      (
        false&&<div className="left-content">
          <Button
            type="primary"
            className={"btn-change"}
            onClick={this.toggleCollapsed}
            style={{ marginBottom: 16 }}
          >
            <Icon type={this.state.collapsed ? "menu-unfold" : "menu-fold"} />
          </Button>

          <Switch>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              className={"left-menu"}
              width={200}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              {menu.map((item) => {
                return (
                  <SubMenu
                    key={item.keys}
                    title={
                      <span>
                        <Icon type={item.icontype} />
                        <span>{item.title}</span>
                      </span>
                    }
                  >
                    {item.children.map((i) => {
                      return (
                        <Menu.Item key={i.key}>
                          <NavLink
                            to={{
                              pathname: i.url,
                              params: { id: 1 },
                              search: "?id=name",
                            }}
                          >
                            {i.title}
                          </NavLink>
                        </Menu.Item>
                      );
                    })}
                  </SubMenu>
                );
              })}
            </Menu>
          </Switch>
        </div>
      )
    );
  }
}

export default LeftMenu;
