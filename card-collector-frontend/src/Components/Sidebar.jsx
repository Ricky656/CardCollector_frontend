import React from "react";
import { Link } from "react-router";
import '../assets/stylesheets/components/_sidebar.scss';

function Sidebar(){
    return (
        <div className="sidebar">
            <div className="nav">
                <div className="btn btn-nav"><Link to="/">Home</Link></div>
                <div className="btn btn-nav"><Link to="/users">Users</Link></div>
                <div className="btn btn-nav">My Collection</div>
                <div className="btn btn-nav">Card Packs</div>
            </div>
        </div>
    )
}

export default Sidebar;