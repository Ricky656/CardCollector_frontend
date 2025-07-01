import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_home.scss";

function Home(){
    return (
        <MainLayout>
            <h1>Welcome!</h1>
            <h3>To the Card Collector</h3>
        </MainLayout>
    )
}

export default Home;