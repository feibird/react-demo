import React, { Component } from "react";
import { Input } from "antd";

class InputItem extends Component {
  render() {
    const { config, onChange, value } = this.props;
    return (
      <div>
        <Input
          {...config}
          onChange={e => onChange(e.target.value)}
          value={value}
        />
      </div>
    );
  }
}

export default InputItem;
