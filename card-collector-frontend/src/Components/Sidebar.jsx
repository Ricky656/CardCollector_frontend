import { Link } from "react-router";
import '../assets/stylesheets/components/_sidebar.scss';
import { useAuthentication } from "../hooks/useAuthentication";

function Sidebar(){
    const currentUser = useAuthentication().currentUser;
    return (
        <div className="sidebar">
            <div className="nav">
                <Link to="/"><div className="btn-nav">Home</div></Link>
                {currentUser?.role == "admin" && <Link to="/users"><div className="btn-nav">Users</div></Link>}
                {currentUser && <Link to="/collection"><div className="btn-nav">My Collection</div></Link>}
                <Link to="/packs"><div className="btn-nav">Card Packs</div></Link>
                <Link to="/cards"><div className="btn-nav">Cards</div></Link>
            </div>
        </div>
    )
}

export default Sidebar;