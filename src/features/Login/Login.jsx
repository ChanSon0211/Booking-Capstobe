import React from "react";
import { Button, Form, Input, Checkbox } from 'antd';

const Login = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return (
    <div className="container text-center" >
      <h1>Login</h1>
      <div className="  flex justify-center pt-5  ">
        <Form
          name="basic"
          onFinish={onFinish}

        >
          <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
              {
pattern:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
message:"Email không hợp lệ"
              }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Mật Khẩu"
            name="matKhau"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
};

export default Login;
