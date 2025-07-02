import React from "react";
import Header from "../components/Header";
import Sidebar from "../Components/Sidebar";
import '../assets/stylesheets/layouts/_container.scss';

function MainLayout({children}){
    return (
        <>
            <Header />
            <Sidebar />
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default MainLayout;