import React from "react";
import Input from "./Input";
import {LoginProps} from "../component-models/loginProps";

function Login(props: LoginProps) {
    return (
        <form className="form">
            <Input type={"text"} placeholder={"Username"}/>
            <Input type={"password"} placeholder={"Password"}/>
            <button type="submit">{props.buttonText}</button>
        </form>
    );
}

export default Login;