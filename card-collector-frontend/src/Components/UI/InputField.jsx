import React from "react";
import '../../assets/stylesheets/components/_forms.scss'

function InputField({cardRef, name}){
    return(
        <input ref={cardRef} className="form-input" type="text" name={name} placeholder={name} />
    );
}

export default InputField;