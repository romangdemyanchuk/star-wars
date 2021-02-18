import React from "react";
import "antd/dist/antd.css";
import "./main.scss"
import {Button, Form, Input} from "antd";

const RegisterForm = ({ setState }) => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return <>
        <div className="root-Register">
            <div className="registerHeading">Register</div>
            <span className="registerBtns">
                <Button className="registerBtn active" onClick={() => setState(false)}>Login</Button>
                <Button
                    className="registerBtn"

                >
                  Register
                </Button>
          </span>
            <Form
                name="register"
                className="register-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="login"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input  placeholder="login" />
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
                        Register
                    </Button>
                </Form.Item>
            </Form>
        </div>
    </>
};

export default RegisterForm;




