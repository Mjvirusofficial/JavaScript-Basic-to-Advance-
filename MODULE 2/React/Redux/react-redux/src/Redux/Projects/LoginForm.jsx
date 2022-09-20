import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../Action';
function LoginForm() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  
  const state = useSelector((state) => state.FormReducer)
  const dis = useDispatch()
  return (
    <div>
      <h1>Login Form❤️</h1>
      <form action="" onSubmit={() => dis(Login({name:name,email:email}))}>
        <input type="text" name = 'name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Username'/><br/>

        <input type="text" name = 'email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/><br/>

        <input type="button" value='Login' />
      </form>
      {
        state.name && state.email && alert(`Name is ${state.name} and email is ${state.email}`)
      }
    </div>
  )
}

export default LoginForm;