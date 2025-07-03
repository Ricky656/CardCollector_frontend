import React from "react";
import '../assets/stylesheets/components/_collection.scss';
import Card from "./Card";

function Title({title}){
    if(title){
        return <div className="card-collection-header">{title}</div>
    }
    return null;
}

export default function Collection({collection}){
    if(collection.isPending){
        return (
            <div className="card-collection">Loading collection...</div>
        )
    }
    if(collection.isError){
        return (
            <div className="card-collection">Error: {collection.error.message}</div>
        )
    }

    return (
        <div className="card-collection">
            <Title title={`${collection.data.username}'s Collection`}/>
            <div className="card-collection-body">
                {collection.data.userCards.$values.map(c => 
                    <Card cardData={c.card} key={c.id} />
                )}
            </div>
        </div>
    )
}