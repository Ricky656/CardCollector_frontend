import React from "react";
import '../assets/stylesheets/components/_collection.scss';
import Card from "./Card";

function Title({title}){
    if(title){
        return <div className="card-collection-header">{title}</div>
    }
    return null;
}

function UserCards({userCards}){
    return(
        <>
            {userCards.userCards.$values.map(c =>
                <Card cardData={c.card} key={c.id} />
            )}
        </>
    )
}

function Cards({cards}){
    return(
        <>
            {cards.$values.map( c=>
                <Card cardData={c} key={c.id} />
            )}
        </>
    )
}

export default function Collection({isUserCards, title, collection}){   
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
            <Title title={isUserCards ? collection.data.username : title }/>
            <div className="card-collection-body">
                {isUserCards ? 
                    <UserCards userCards={collection.data} /> : 
                    <Cards cards={collection.data} /> }
            </div>
        </div>
    )
}