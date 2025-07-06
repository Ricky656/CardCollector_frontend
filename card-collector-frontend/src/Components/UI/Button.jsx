import React from "react";
import '../../assets/stylesheets/components/_buttons.scss'

function Button({text, classList, handleClick}){
    return(
        <button className={"btn " + classList} onClick={handleClick}>{text}</button>
    );
}

export default Button;