import React from 'react'
import './Toodo.css';
import Toodo from './Toodo';
function TodoList(props) {
  return (
    <>
    <div className='listStyle'>
    <li className='lidiv'><button onClick={()=>{props.onSelect(props.id)}} className='btn'>x</button>{props.value}</li>
    </div>
    </>
  )
}

export default TodoList