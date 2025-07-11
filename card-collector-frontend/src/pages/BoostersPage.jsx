import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_boostersPage.scss";

import Collection from '../Components/Collection';
import useFetchPacks from '../hooks/Api/useFetchPacks';
import Card from '../Components/Cards/Card';

function BoostersPage(){
    const {data: packs, isPending, isError, error} = useFetchPacks();
    return (
        <MainLayout>
            <h1>All Boosters</h1>
            <div className='booster-collection'>
                <Collection isPending ={isPending} isError ={isError} error = {error}>
                    {packs?.$values.map( p => 
                        <Card cardData={p} key={p.id} />
                    )}
                </Collection>
            </div>
        </MainLayout>
    )
}

export default BoostersPage;