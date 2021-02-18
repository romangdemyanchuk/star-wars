import React from "react";
import "antd/dist/antd.css";
import "./main.scss"
import {Button, Form, Input} from "antd";

const LoginForm = ({ setState }) => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    return <>
        <div className="root-Login">
            <div className="loginHeading">Login</div>
            <span className="loginBtns">
                <Button className="loginBtn active">Login</Button>
                <Button
                    className="loginBtn"
                    onClick={() => setState(true)}
                >
                  Register
                </Button>
          </span>
            <Form
                name="login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="e-mail"
                    rules={[
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ]}
                >
                    <Input placeholder="email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="logBtn">
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
};

export default LoginForm;




