import React from "react";
import '../../assets/stylesheets/components/_forms.scss'

function InputField({value, name, onChange, placeholder}){
    return(
        <input
            className="form-input"
            type="text"
            defaultValue={value}
            name={name}
            placeholder={placeholder} 
            onChange={onChange}
        />
    );
}

export default InputField;