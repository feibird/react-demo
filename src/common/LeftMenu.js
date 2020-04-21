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
import { getGlobalStates } from "@masx200/react-simple-global-state-store-hook";
const { SubMenu } = Menu;

class LeftMenu extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      menu: [],
    };
  }

  componentWillReceiveProps(e,x){
    console.log(e,x)
  }

  toggleCollapsed = (e) => {
    console.log(this)
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed,
    });
  };

  componentDidMount() {
    console.log(this)
    const topMenuId = getGlobalStates('topMenuId');
    http('/menu/left',topMenuId).then(res=>{
      console.log(res)
    })
  }

  componentWillReceiveProps() {
    console.log(this.props);
  }

  render() {
    const menu = getJson("leftMenu");
    
    return (
      (
        <div className="left-content">
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
