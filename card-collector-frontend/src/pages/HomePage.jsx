import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_home.scss";

function HomePage(){
    return (
        <MainLayout>
            <h1>Welcome!</h1>
            <h3>To the Card Collector</h3>
            <p>
                This frontend site was developed using React, as an example project to be used with 
                my Asp.Net backend.
            </p>
        </MainLayout>
    )
}

export default HomePage;