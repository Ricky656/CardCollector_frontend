import React from 'react';
import '../../assets/stylesheets/components/_forms.scss';

export default function Dropdown({formRef, keyArray}){
    return(
        <select className="form-dropdown" ref ={formRef}>
            {getEnumKeys(keyArray).map((key, index) => (
                <option key={index} value={keyArray[key]}> 
                    {key}
                </option>
            ))}
        </select>
    );
}

function getEnumKeys(keyArray){
    return Object.keys(keyArray);
}