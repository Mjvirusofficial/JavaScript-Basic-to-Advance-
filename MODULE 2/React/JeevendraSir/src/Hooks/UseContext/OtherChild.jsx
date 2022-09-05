import React, { useContext } from 'react'
import { Data } from './Parents'
function OtherChild() {
    const {textColor} = useContext(Data)
  return (
    <div>
      <h3 style={{color:textColor}}>This is OtherChild Component</h3>
    </div>
  )
}

export default OtherChild