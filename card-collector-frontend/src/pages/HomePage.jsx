import { useContext, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_home.scss";
import { AuthContext } from '../hooks/useAuthentication';
import Button from '../Components/UI/Button';
import { Link } from 'react-router';

function HomePage(){
    const currentUser = useContext(AuthContext).currentUser;
    return (
        <MainLayout>
            <h1>Welcome!</h1>
            <h3>To the Card Collector</h3>
            <p>
                This frontend site was developed using React, as an example project to be used with 
                my Asp.Net backend.
            </p>
            <div>
                {!currentUser &&  <Link to="/login"><Button text="Login" classList="btn-success" /></Link>}
            </div>
        </MainLayout>
    )
}

export default HomePage;