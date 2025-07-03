import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_collectionPage.scss";

import Collection from '../Components/Collection';
import { useQuery } from '@tanstack/react-query';
import { userCardCollectionQuery } from '../hooks/Api/CardCollectionQueries';

function CollectionPage(){
    const userCollection = useQuery(userCardCollectionQuery(1))
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