import React, { Component } from "react";
import ListPage from "../common/ListPage";
import data from "./data/domData.json";
// import ListPageHoc from "./PartyX";

// @ListPageHoc("PartyA")
class PartyA extends ListPage {
  state = {
    ...this.state,
    col: 6,
    columns: data.data.columns,
    dataSource: [],
    formData: data.data.formData,
  };

  btnGroup = [
    {
      title: "创建",
      icon: "setting",
      type: "primary",
      key: Math.random(),
      onClick: this.AddData,
    },
  ];

  AddData() {
    console.log(1);
  }
}
export default PartyA;
