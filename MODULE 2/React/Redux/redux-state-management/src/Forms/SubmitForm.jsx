import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Submit } from '../Action/Action'
function SubmitForm() {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
 
  const state = useSelector((state) => state.SubmitReducer)
  const dispatch = useDispatch()
  return (
    <div>
        <form action="" onSubmit={()=>dispatch(Submit({name:name,email:email}))}>
        <h1>Register form❤️</h1>
        <input type="text" placeholder='Username' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
        <input type="text" placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
        <input type="button" value='Submit'/><br />
        </form>
        {state.name && state.email && alert(state.name,state.email)}
    </div>
  )
}

export default SubmitForm;