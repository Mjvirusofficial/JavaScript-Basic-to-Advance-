import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'
import Login from './Login';
import Logout from './Logout';
import User from './User';

function LoginPage() {
  const {isAuthenticated} = useAuth0();
  return (
    <div>
    <h1>This is a exapmle of O-AUTH❤️</h1>
      {
        !isAuthenticated ? (
          <div className="">
          <Login/>
          </div>
        ) :

        (
          <div className="">
          <Logout/>
          <User/>
          </div>
        )
      }
    </div>
  )
}

export default LoginPage