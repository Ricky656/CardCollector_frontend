import React from "react";
import '../../assets/stylesheets/components/_buttons.scss'

function Button({text, classList, handleClick, disabled, mode, type}){
    return(
        <button type={type} disabled={disabled} className={"btn " + classList} onClick={handleClick}>
            {mode=="pending" ? "Please wait..." : text}
        </button>
    );
}

export default Button;