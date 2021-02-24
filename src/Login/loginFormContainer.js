import React, {useEffect} from "react";
import "antd/dist/antd.css";
import "./login.scss"
import {userAuth, userLogin} from "../api";
import {infoAction} from "../helpers";
import {useHistory} from "react-router-dom";
import Login from "./loginForm";

const LoginContainer = () => {
    const history = useHistory()

    useEffect(() => {
        userAuth().then(res => {
                if(res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    let userData = JSON.stringify({id, login, email});
                    infoAction("You authorised ");
                    history.push('/main')
                    localStorage.setItem("isAuth", true);
                    localStorage.setItem("userData", userData);
                }
            })
    }, [])

    const onFinish = (values) => {
        userLogin(values)
            .then(res => {
                if(res.data.resultCode === 0) {
                    localStorage.setItem("isAuth", true);
                    infoAction("You successfully login");
                    history.push('/main')

                }
                if(res.data.resultCode === 1 || res.data.resultCode === 10) {
                    infoAction(res.data.messages, "/");
                }



            })

    };
    return <Login onFinish={onFinish}/>

};

export default LoginContainer;



