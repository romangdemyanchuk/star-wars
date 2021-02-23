import React, {useState} from "react";
import "antd/dist/antd.css";
import "./login.scss"
import RegisterForm from "./registerForm";
import LoginForm from "./loginForm";

const Login = () => {
    let [state, setState] = useState(false);
    return <>
        {state ?
            <RegisterForm setState={setState} />
            :
            <LoginForm setState={setState} />
        }
    </>
};

export default Login;
