import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const User = () => {
    const {user,isAuthenticated,isLoading } = useAuth0();
    if(isLoading === true){
        return <div className="div">Loading...</div>
    }

    return(
        isAuthenticated && (
            <div className="div">
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <h2>{user.email}</h2>
            </div>
        )
    )
}

export default User