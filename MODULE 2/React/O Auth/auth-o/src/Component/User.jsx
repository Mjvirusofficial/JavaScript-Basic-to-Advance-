import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function User() {
const {User,Success,Pending} = useAuth0();
if(Pending === true){
    return <div className="">Loading...</div>
}

return(
    Success && (
        <div className="box">
            <img src={User.picture} alt={User.name}/>
            <h2>{User.name}</h2>
            <h2>{User.email}</h2>
        </div>
    )
)
}

export default User