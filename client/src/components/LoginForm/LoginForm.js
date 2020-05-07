import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./LoginForm.css";

class LoginForm extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Received values of form: ", values);
    };
    return (
      <React.Fragment>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожайлуйста войдите в свой аккаунт</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username!" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
          </Form.Item>

          <Form.Item style={{textAlign: 'center'}}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {/* <Link className="auth__reg-link" to="/primary"> */}
                Войти в аккаунт
              {/* </Link> */}
            </Button>
            <div>Or</div>
            <Link className="auth__reg-link" to="/register">
              register now!
            </Link>
          </Form.Item>
        </Form>
      </React.Fragment>
    );
  }
}

export default LoginForm;
