import React from 'react'
import { fname } from './FirstComponent'
function ThirdComponent() {
  return (
    <div>
      <fname.Consumer>
        {(fname)=>{
            return <h1>My name is {fname}</h1>
        }}
      </fname.Consumer>
    </div>
  )
}

export default ThirdComponent