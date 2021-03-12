import React, {useEffect} from "react";
import {userAuth, userLogin} from "../../api";
import {infoAction} from "../../helpers/helpers";
import {useHistory} from "react-router-dom";
import Login from "./loginForm";
import "./login.scss"

const REQUEST_ERROR_RESULT_CODE = [1, 10]
const LoginContainer = () => {
    const history = useHistory()

    useEffect(() => {
        userAuth()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data
                    let userData = JSON.stringify({id, login, email});
                    infoAction("You authorised ");
                    history.push('/main')
                    localStorage.setItem("isAuth", true);
                    localStorage.setItem("userData", userData);
                }
            })
            .catch(() => {
                infoAction("Something is wrong");
            })
    }, [])

    let isAuth = localStorage.getItem('isAuth');
    isAuth && history.push('/main')

    const onFinish = (values) => {
        userLogin(values)
            .then(res => {
                if (res.data.resultCode === 0) {
                    localStorage.setItem("isAuth", true);
                    infoAction("You successfully Login");
                    history.push('/main')
                }
                if (REQUEST_ERROR_RESULT_CODE.includes(res.data.resultCode)) {
                    infoAction(res.data.messages, "/");
                }
            })
            .catch(() => {
                infoAction("Something is wrong");
            })
    };
    return <Login onFinish={onFinish}/>
};

export default LoginContainer;




