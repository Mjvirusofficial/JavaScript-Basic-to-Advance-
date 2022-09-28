import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function Login() {
    const {login} = useAuth0();
    return <button onClick={() => login()}>Login</button>
}

export default Login;