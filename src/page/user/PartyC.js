import React, { Component } from "react";
import ListPage from "../common/ListPage";

class PartyB extends ListPage {
  constructor(props) {
    super(props);
    this.formData = [
      {
        id: Math.random(),
        key: "name",
        label: "姓名",
        type: {
          key: "input",
          config: {
            placeholder: "请输入姓名"
          }
        },
        rules: {
          required: true,
          message: "请输入"
        }
      },
      {
        id: Math.random(),
        key: "age",
        label: "年龄",
        type: {
          key: "select",
          config: {
            placeholder: "请输入年龄",
            children: [
              { value: 11, label: "11" },
              { value: 12, label: "12" },
              { value: 13, label: "13" },
              { value: 14, label: "14" },
              { value: 15, label: "15" },
              { value: 16, label: "16" },
              { value: 17, label: "17" }
            ]
          }
        }
      },
      {
        id: Math.random(),
        key: "time",
        label: "日期",
        type: {
          key: "date",
          config: {
            placeholder: "请输入年龄"
          }
        }
      }
      // {
      //   id: Math.random(),
      //   key: "type",
      //   label: "类型",
      //   type: "select"
      // }
    ];
    this.state = {
      ...this.state,
      dataSource: []
    };
  }
  componentDidMount() {
    console.log(this.props)
  }
  handleSearch(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log("111: ", values);
    });
  }
}

export default PartyB;
