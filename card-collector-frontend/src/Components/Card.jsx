import React from "react";
import '../assets/stylesheets/components/_cardItem.scss';

export default function Card({name}){
    return (
        <div className="card-item">
            {name}
        </div>
    )
}
