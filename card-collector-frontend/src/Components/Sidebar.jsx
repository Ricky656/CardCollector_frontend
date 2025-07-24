import React, { useContext } from "react";
import { Link } from "react-router";
import '../assets/stylesheets/components/_sidebar.scss';
import { AuthContext } from "../hooks/useAuthentication";

function Sidebar(){
    const currentUser = useContext(AuthContext).currentUser;
    return (
        <div className="sidebar">
            <div className="nav">
                <Link to="/"><div className="btn-nav">Home</div></Link>
                <Link to="/users"><div className="btn-nav">Users</div></Link>
                {currentUser && <Link to="/collection"><div className="btn-nav">My Collection</div></Link>}
                <Link to="/packs"><div className="btn-nav">Card Packs</div></Link>
                <Link to="/cards"><div className="btn-nav">Cards</div></Link>
            </div>
        </div>
    )
}

export default Sidebar;