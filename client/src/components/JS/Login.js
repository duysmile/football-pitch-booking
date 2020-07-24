import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import '../SCSS/login.scss';

import axios from '../../services/http';

const Login = () => {
  const history = useHistory();
  const onFinish = async ({ username, password }) => {
    try {
      const res = await axios.post('/login', { username, password });
      const token = res.data.token;
      axios.defaults.headers.common['x-access-token'] = token;
      localStorage.setItem('accessToken', token);
      history.push('/admin');
    } catch (error) {
      message.error(error.response.data.message);
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="container d-flex justify-content-center">
      <Form
        className="w-50"
        name="normal_login"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
