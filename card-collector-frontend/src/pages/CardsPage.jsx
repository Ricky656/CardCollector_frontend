import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_cardsPage.scss";
import "../assets/stylesheets/layouts/_general.scss";

import Collection from '../Components/Collection';
import useFetchCards from '../hooks/Api/useFetchCards';
import Button from '../Components/UI/Button';
import CreateCard from '../Components/Cards/CreateCard';

function CardsPage(){
    const [showAddCard, setShowAddCard] = useState(false);
    const cards = useFetchCards();

    return (
        <MainLayout>
            <h1>All Cards</h1>
            <div className='action-bar'>
                <div className='action-bar-right'>
                    {!showAddCard && <Button 
                        text="Create New Card" 
                        classList="btn-success"
                        handleClick={() => {setShowAddCard(true)}} 
                    />}
                </div>
            </div>
            {showAddCard && 
                <div className='add-card-section'>
                    <CreateCard onCancel={() => {setShowAddCard(false)}} />
                </div>
            }
            <div className='card-section'>
                <Collection collection={cards} isUserCards={false}  />
            </div>
        </MainLayout>
    )
}

export default CardsPage;