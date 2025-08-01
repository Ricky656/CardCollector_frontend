import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_boostersPage.scss";
import Collection from '../Components/Collection';
import useFetchPacks from '../hooks/Api/useFetchPacks';
import Card from '../Components/Cards/Card';
import { Link } from 'react-router';
import Button from '../Components/UI/Button';
import CreatePack from './CreateBoosterPage';
import { useAuthentication } from '../hooks/useAuthentication';

function BoostersPage() {
    const { data: packs, isPending, isError, error } = useFetchPacks();
    const currentUser = useAuthentication().currentUser;

    return (
        <MainLayout>
            <h1>All Boosters</h1>
            <div className="action-bar">
                <div className='action-bar-right'>
                    {currentUser?.role=="Admin" && <Link to="/packs/new">
                        <Button text="New Booster Pack"classList="btn-success"/>
                    </Link>}
                </div>
            </div>
            <div className='booster-collection'>
                <Collection isPending={isPending} isError={isError} error={error}>
                    {packs?.$values.map(p =>
                        <Link to={`/packs/${p.id}`} key={p.id}>
                            <Card cardData={p} />
                        </Link>
                    )}
                </Collection>
            </div>
        </MainLayout>
    )
}

export default BoostersPage;