import '../assets/stylesheets/components/_usersList.scss';
import User from "./User";

function UsersList({users}){
    if(users.isPending || users == null){
        return <div className="users-list">Loading...</div>
    }
    if(users.isError){
        return <div className="users-list">Error: {users.error.message}</div>
    }
    return(
        <div className='users-list'>
            {users.data.$values.map( u=> 
                <User userData={u} key={u.id} />
            )}
        </div>
    );
}

export default UsersList;