import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Login from './Login';
import Logout from './Logout';
import User from './User';

function LoginPage() {
    const {isSucess} = useAuth0();
  return (
    <div>
        <h1>This is Autho-O Example❤️</h1>
        {
            !isSucess ? (<div><h1>Login</h1><Login/></div>)
            :
            (<div><Logout/><User/></div>)
        }
    </div>
  )
}

export default LoginPage;