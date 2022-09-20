import React from 'react'

function Login() {
  return (
    <div>
        <div className="container box mt-3 mx-auto " >
            <input type="text" placeholder='Username' className='in mt-2 '/><br />
            <input type="pasword" placeholder='Pasword' className='in mt-2'/><br />
            <button className="btn mt-2">Login</button>
        </div>
    </div>
  )
}

export default Login