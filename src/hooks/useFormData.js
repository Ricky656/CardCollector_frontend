import { useState } from "react";


export default function useFormData(dataObject){
    const [formData, setFormData] = useState(dataObject);
    const changeFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData((previousData) => ({
            ...previousData,
            [name]: value
        }));
    }
    return [formData, changeFormData, setFormData]; 
}