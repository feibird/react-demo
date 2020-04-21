import React, { Component } from "react";
import { Select } from "antd";
import { isArray } from "../../../util/TypeUtil";
const { Option } = Select;
/**
 * 下拉组件
 */
class SelectItem extends Component {
  componentDidMount() {
    this.init(this.props);
  }

  init(props) {}

  render() {
    const { config, onChange, value } = this.props;
    const { children } = config;
    console.log(children);
    return (
      <div>
        <Select {...config} onChange={e => onChange(e)} value={value}>
          {isArray(children) &&
            children.length > 0 &&
            children.map((item, index) => {
              return (
                <Option key={index} value={item.value}>
                  {item.label}
                </Option>
              );
            })}
        </Select>
      </div>
    );
  }
}

export default SelectItem;
