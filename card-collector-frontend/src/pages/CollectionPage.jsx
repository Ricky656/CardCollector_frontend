import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_collectionPage.scss";

import Collection from '../Components/Collection';
import useFetchUserCards from '../hooks/Api/useFetchUserCards';

function CollectionPage(){
    const userCollection = useFetchUserCards(1);
    return (
        <MainLayout>
            <h1>My Collection</h1>
            <div className='main-collection'>
                <Collection title="My Collection" collection={userCollection} />
            </div>
        </MainLayout>
    )
}

export default CollectionPage;