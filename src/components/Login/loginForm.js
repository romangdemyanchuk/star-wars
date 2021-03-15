import React from "react";
import "./login.scss"
import {Button, Form, Input} from "antd";

const Login = ({onFinish}) => {
    return <>
        <div className="root-Login">
            <div className="loginHeading">Registration</div>
            <Form
                name="login"
                className="login-form"
                initialValues={{remember: true}}
                onFinish={onFinish}
            >
                <Form.Item
                    name="login"
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
                    <Input placeholder="email"/>
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{required: true, message: 'Please input your Password!'}]}
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

export default Login;




