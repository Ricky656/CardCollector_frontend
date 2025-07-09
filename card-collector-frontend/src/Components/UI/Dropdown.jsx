import React from 'react';
import '../../assets/stylesheets/components/_forms.scss';

export default function Dropdown({value, keyArray, name, onChange}){
    const rarity = value ? value : 0;
    return(
        <select className="form-dropdown" name={name} onChange={onChange} defaultValue={rarity}>
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