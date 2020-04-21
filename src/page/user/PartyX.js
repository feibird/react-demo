import React, { Component } from "react";

export default data => WrappedComponent => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }

    addCount() {
      const { count } = this.state;
      this.setState({ count: count + 1 });
    }

    render() {
      const eventSource = {
        addCount: this.addCount
      };
      return (
        <div>
          <div>{data}</div>
          <WrappedComponent {...this.props} {...this.state} {...eventSource} />
        </div>
      );
    }
  };
};
