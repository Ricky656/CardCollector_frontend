import React from "react";
import '../../assets/stylesheets/components/_buttons.scss'

function Button({text, classList, handleClick, disabled, mode}){
    return(
        <button disabled={disabled} className={"btn " + classList} onClick={handleClick}>
            {mode=="pending" ? "Please wait..." : text}
        </button>
    );
}

export default Button;