import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_cardsPage.scss";

import Collection from '../Components/Collection';
import useFetchCards from '../hooks/Api/useFetchCards';

function CardsPage(){
    const cards = useFetchCards();
    return (
        <MainLayout>
            <h1>All Cards</h1>
            <div className='card-section'>
                <Collection collection={cards} isUserCards={false}  />
            </div>
        </MainLayout>
    )
}

export default CardsPage;