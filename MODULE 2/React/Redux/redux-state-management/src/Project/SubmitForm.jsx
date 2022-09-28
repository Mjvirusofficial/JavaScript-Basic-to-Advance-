import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Sumbit } from '../Action';

function SubmitForm() {
  const [name,setName] = useState('')
  const state = useSelector((state) => state.SubmitForm)
  const d = useDispatch()
  return (
    <div>
        <form action="" onSubmit={() => d(Sumbit({name:name}))}>
        <br /><input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        <br /><button>Submit</button>
        </form>
        <h2>{name}</h2>
        {/* { state.name && alert(`Hii, ${state.name}`) } */}
    </div>
  )
}

export default SubmitForm;