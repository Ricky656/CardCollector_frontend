import React from "react";
import '../assets/stylesheets/components/_collection.scss';
import Card from "./Card";

function Title({title}){
    if(title){
        return <div className="card-collection-header">{title}</div>
    }
    return null;
}

export default function Collection({title}){
    return (
        <div className="card-collection">
            <Title title={title}/>
            <Card name="Test Card" />
        </div>
    )
}