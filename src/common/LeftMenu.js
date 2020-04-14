import React, { Component } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  Link,
} from "react-router-dom";
import { connect } from "react-redux";
import { Icon, Menu, Button } from "antd";
import { addCount, delCount } from "../store/actions/countAction";
import { getMenu, MenuData } from "../store/actions/menuAction";
import { getJson } from "../Service/jsonService";
import "../css/common.less";
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

  render() {
    const menu = getJson("leftMenu");
    console.log(menu)
    return (
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
    );
  }
}

function mapStateToProps(state) {
  return {
    menuList: state.countReducers.count,
    menu: state.menuReducers.menu,
  };
}

function mapActionToProps(dispatch) {
  return {
    addCount: () => dispatch(addCount()),
    delCount: (num) => dispatch(delCount(num)),
    getMenu: () => dispatch(getMenu()),
    MenuData: () => dispatch(MenuData()),
  };
}

export default connect(mapStateToProps, mapActionToProps)(LeftMenu);
