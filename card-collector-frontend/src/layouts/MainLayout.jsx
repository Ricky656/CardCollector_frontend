import React from "react";
import Header from "../components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";
import '../assets/stylesheets/layouts/_general.scss';

function MainLayout({children}){
    return (
        <>
            <Header />
            <Sidebar />
            <div className="container">
                {children}
            </div>
            <Footer />
        </>
    )
}

export default MainLayout;