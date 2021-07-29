import React from "react";
import {InputProps} from "../component-models/inputProps";

function Input(props: InputProps) {
    return (
        <div>
            <input type={props.type} placeholder={props.placeholder}/>
        </div>

    );
}

export default Input;