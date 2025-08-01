import React from "react";
import '../assets/stylesheets/components/_usersList.scss';

function User({userData}){
    return(
        <div className='user-item'>
            <h4>{userData.username}</h4>
        </div>
    )
}

export default User;