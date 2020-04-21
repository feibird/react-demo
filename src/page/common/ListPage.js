import React, { Component } from "react";
import { Table, Breadcrumb, Icon, Button, Menu } from "antd";
import SearchForm from "./SearchForm";
import "../../css/viewlyout.less";
import PropTypes from "prop-types";

class ListPage extends Component {
  constructor() {
    super();
    this.state = {
      col: 8,
      selectedRowKeys: [],
      dataSource: [],
      columns: []
    };
  }

  btnGroup = [];

  handleSearch(data) {
    console.log(data);
  }

  render() {
    const { selectedRowKeys, formData, col, dataSource, columns } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };

    return (
      <div className="view-lyout">
        <div className={"breadcrumb-lyout"}>
          <Breadcrumb>
            <Breadcrumb.Item href="">
              <Icon type="home" />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="">
              <Icon type="user" />
              <span>客户列表</span>
            </Breadcrumb.Item>
            <Breadcrumb.Item>甲方客户</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className={"search-lyout"}>
          <ListPage.SearchForm
            formData={formData}
            col={col}
            handleSearch={this.handleSearch.bind(this)}
          />
        </div>

        <Menu mode="horizontal" className={"lyout-btn"}>
          {this.btnGroup.map((item, index) => {
            return (
              <Menu.Item key={item.key} onClick={item.onClick}>
                <Icon type={item.icon} />
                {item.title}
              </Menu.Item>
            )
          })}
        </Menu>

        <div className={"table-lyout"}>
          <Table
            size={"small"}
            dataSource={dataSource}
            columns={columns}
            rowSelection={rowSelection}
            scroll={{ y: 340 }}
            bordered
            pagination={{
              showQuickJumper: true,
              showSizeChanger: true,
              defaultCurrent: 2,
              total: 500
            }}
          />
        </div>
      </div>
    );
  }
}
ListPage.SearchForm = SearchForm;

export default ListPage;
