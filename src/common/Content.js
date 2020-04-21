import React,{ Component } from "react";
import LeftMenu from "./LeftMenu";
import RightContent from "./RightContent";
export default class Content extends Component {
  render() {
    return (
      <div className={'app-content'}>
        <LeftMenu/>
        <RightContent/>
      </div>
    );
  }
}
