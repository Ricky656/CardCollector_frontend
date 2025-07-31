import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_cardsPage.scss";
import "../assets/stylesheets/layouts/_general.scss";

import Collection from '../Components/Collection';
import useFetchCards from '../hooks/Api/useFetchCards';
import Button from '../Components/UI/Button';
import CreateCard from '../Components/Cards/CreateCard';
import Card from '../Components/Cards/Card';
import { Link } from 'react-router';
import { useAuthentication } from '../hooks/useAuthentication';

function CardsPage() {
    const [showAddCard, setShowAddCard] = useState(false);
    const { data: cards, isPending, isError, error } = useFetchCards();
    const currentUser = useAuthentication().currentUser;

    return (
        <MainLayout>
            <h1>All Cards</h1>
            <div className='action-bar'>
                <div className='action-bar-right'>
                    {currentUser?.role == "Admin" && !showAddCard && <Button
                        text="Create New Card"
                        classList="btn-success"
                        handleClick={() => { setShowAddCard(true) }}
                    />}
                </div>
            </div>
            {showAddCard &&
                <div className='add-card-section'>
                    <CreateCard onCancel={() => { setShowAddCard(false) }} />
                </div>
            }
            <div className='card-section'>
                <Collection isPending={isPending} isError={isError} error={error}>
                    {cards?.$values.map(c =>
                        <Link to={`/cards/${c.id}`} key={c.id}>
                            <Card cardData={c} />
                        </Link>
                    )}
                </Collection>
            </div>
        </MainLayout>
    )
}

export default CardsPage;