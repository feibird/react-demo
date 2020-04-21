import React, { Component } from "react";
import { DatePicker } from "antd";

class DateItem extends Component {
  render() {
    const { config, onChange, value } = this.props;
    return (
      <div>
        <DatePicker
          {...config}
          onChange={e => onChange(e)}
          value={value}
        />
      </div>
    );
  }
}

export default DateItem;
