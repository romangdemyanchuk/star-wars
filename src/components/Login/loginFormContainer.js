import React from "react";
import {userLogin, userRegister} from "../../api";
import {infoAction} from "../../helpers/helpers";
import {useHistory} from "react-router-dom";
import Login from "./loginForm";
import "./login.scss"

const LoginContainer = () => {
    const history = useHistory()

    let isAuth = localStorage.getItem('isAuth');
    isAuth && history.push('/main')

    const onFinish = (values) => {
        userRegister(values)
            .then((response) => {
                if (response.request.statusText === "Created") {
                    userLogin(values)
                        .then((response) => {
                            if (response.statusText === "OK") {
                                localStorage.setItem("isAuth", true);
                                history.push('/main')
                                return infoAction("You successfully register and login")
                            }
                        })
                }
            })
            .catch((e) => {
                if (e.response.status) {
                    infoAction(e.response.data.message, "");
                }
            });
    };
    return <Login onFinish={onFinish}/>
};

export default LoginContainer;




