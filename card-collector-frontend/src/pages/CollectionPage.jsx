import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_collectionPage.scss";

import Collection from '../Components/Collection';

function CollectionPage(){
    return (
        <MainLayout>
            <h1>My Collection</h1>
            <div className='main-collection'>
                <Collection title="My Collection" />
            </div>
        </MainLayout>
    )
}

export default CollectionPage;