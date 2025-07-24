import React from "react";
import '../assets/stylesheets/components/_header.scss';
import { useAuthentication } from "../hooks/useAuthentication";
import { Link, useLocation } from "react-router";
import Button from "./UI/Button";

function Header() {
    const currentUser = useAuthentication().currentUser;
    const logout = useAuthentication().HandleLogout;
    const currentPage = useLocation().pathname;
    return (
        <div className="header">
            <h1>Card Collector</h1>
            <div className="header-actions">
                {currentUser ?
                    <>
                        <div className="header-greeting">Hello <b>{currentUser.username}</b>!</div>
                        <Button text="Logout" classList="btn-danger" handleClick={() => logout("/")} />
                    </>
                    :
                    <>
                        {currentPage != "/login" && <Link to="/login"><Button text="Login" classList="btn-success" /></Link>}
                    </>
                }
            </div>
        </div>
    )
}

export default Header;