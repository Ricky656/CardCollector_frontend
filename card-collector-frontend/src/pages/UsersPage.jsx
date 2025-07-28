import { useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import "../assets/stylesheets/layouts/_users.scss";
import useFetchUsers from '../hooks/Api/useFetchUsers';
import UsersList from '../Components/UsersList';
import useAdminOnly from '../hooks/Api/useAdminOnly';


function UsersPage(){
    const users = useFetchUsers(); 
    useAdminOnly();
    return (
        <MainLayout>
            <h1>Users</h1>
            <div className="section-users">
                <UsersList users={users} />
            </div>
        </MainLayout>
    )
}

export default UsersPage;