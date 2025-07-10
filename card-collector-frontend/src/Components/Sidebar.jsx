import React from "react";
import { Link } from "react-router";
import '../assets/stylesheets/components/_sidebar.scss';

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="nav">
                <Link to="/"><div className="btn-nav">Home</div></Link>
                <Link to="/users"><div className="btn-nav">Users</div></Link>
                <Link to="/collection"><div className="btn-nav">My Collection</div></Link>
                <div className="btn-nav">Card Packs</div>
                <Link to="/cards"><div className="btn-nav">Cards</div></Link>
            </div>
        </div>
    )
}

export default Sidebar;