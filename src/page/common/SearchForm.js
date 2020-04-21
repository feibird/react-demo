import React, { Component } from "react";
import { Form, Row, Col, Input, Icon, Button } from "antd";
import InputItem from "./FormItem/InputItem";
import SelectItem from "./FormItem/SelectItem";
import DateItem from "./FormItem/DateItem";
import "../../css/searchForm.less";
class SearchForm extends Component {
  state = {};

  handleSearch(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      console.log(values);
      this.props.handleSearch && this.props.handleSearch(values);
    });
  }

  handleReset() {
    this.props.form.resetFields();
  }
  getFields() {
    const { getFieldDecorator } = this.props.form;
    const { formData, col = 8 } = this.props;
    return formData.map((item, index) => {
      return (item => {
        const commpnent = item.type;
        switch (commpnent.key) {
          case "input":
            return (
              <Col span={col} key={item.id}>
                <Form.Item label={item.label}>
                  {getFieldDecorator(item.key, {
                    rules: [
                      item.rules || {
                        required: false,
                        message: "此项必填"
                      }
                    ]
                  })(<InputItem config={commpnent.config} />)}
                </Form.Item>
              </Col>
            );
          case "select":
            return (
              <Col span={8} key={item.id}>
                <Form.Item label={item.label}>
                  {getFieldDecorator(item.key, {
                    rules: [
                      item.rules || {
                        required: false,
                        message: "此项必填"
                      }
                    ]
                  })(<SelectItem config={commpnent.config} />)}
                </Form.Item>
              </Col>
            );
          case "date":
            return (
              <Col span={8} key={item.id}>
                <Form.Item label={item.label}>
                  {getFieldDecorator(item.key, {
                    rules: [
                      item.rules || {
                        required: false,
                        message: "此项必填"
                      }
                    ]
                  })(<DateItem config={commpnent.config} />)}
                </Form.Item>
              </Col>
            );
        }
      })(item);
    });
  }

  render() {
    return (
      <Form
        className="ant-advanced-search-form"
        onSubmit={this.handleSearch.bind(this)}
      >
        <Row gutter={24}>{this.getFields()}</Row>
        <Row>
          <Col span={24} style={{ textAlign: "right" }}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button
              style={{ marginLeft: 8 }}
              onClick={this.handleReset.bind(this)}
            >
              清除
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(SearchForm);
