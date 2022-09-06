import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList';
import './Toodo.css'

function Toodo() {
  const [input,setInput] = useState('')
  function RenderInputValue(event){
    setInput(event.target.value)
  }

  const [arrayItem,setArrayItem] = useState([])
  const ButtonClicked = () =>{
  setArrayItem(oldItem => [input,...oldItem])
  setInput("")
  }

  function DeleteItem(id){
    setArrayItem((oldItem)=>{
      return oldItem.filter((element,index) =>{
      return index !== id;
    })
    })
  }
  
  return (
    <div> 
       <div className="container">
        <div className="box">
            <h1 className='head'>Welcome To My Todo App❤️</h1>
            <input className='input' type="text" placeholder='Write Something...' name="" id="" value={input} onChange={RenderInputValue}/>
            <button onClick={ButtonClicked} className='button'>+</button>
            <div><ul className=''>
              {arrayItem.map((i,index) =>{
               return <TodoList value={i}
               key={index}
               id={index}
               onSelect={DeleteItem}
               />
               })}
            </ul>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Toodo;