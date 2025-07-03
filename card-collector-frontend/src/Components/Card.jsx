import React from "react";
import '../assets/stylesheets/components/_cardItem.scss';

export default function Card({cardData}){
    return (
        <div className="card-item">
            {cardData.name}
        </div>
    )
}
