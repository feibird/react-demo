import React, { Component } from "react";
import { connect } from "react-redux";
import { addCount, delCount } from "../../store/actions/countAction";

class Test extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <button onClick={() => this.props.addCount()}>+</button>
        {this.props.menuList}
        <button onClick={() => this.props.delCount(3)}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    menuList: state.countReducers.count
  };
}

function mapActionToProps(dispatch) {
  return {
    addCount: () => dispatch(addCount()),
    delCount: num => dispatch(delCount(num))
  };
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(Test);
