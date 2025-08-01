import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_collectionPage.scss";

import Collection from '../Components/Collection';
import useFetchUserCards from '../hooks/Api/useFetchUserCards';
import Card from '../Components/Cards/Card';
import { useAuthentication } from '../hooks/useAuthentication';

function CollectionPage() {
    const currentUser = useAuthentication().currentUser;
    const { data: userCards, isPending, isError, error } = useFetchUserCards(currentUser.id);
    return (
        <MainLayout>
            <h1>My Collection</h1>
            <div className='main-collection'>
                <Collection isPending={isPending} isError={isError} error={error}>
                    {userCards?.userCards.$values.map(c =>
                        <Card cardData={c.card} key={c.id} />
                    )}
                </Collection>
            </div>
        </MainLayout>
    )
}

export default CollectionPage;