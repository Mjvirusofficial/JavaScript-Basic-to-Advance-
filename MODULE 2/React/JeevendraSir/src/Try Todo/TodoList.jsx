import React from 'react'
import { useState } from 'react';

function TodoList() {
const [input,setInput] = useState()
  function inputValue(event){
    setInput(event.target.value)
  }

  //When Button Clicked 
const [array,setArray] = useState([])
  function buttonlicked(){
  setArray(oldItem=>[input,...oldItem])
  setInput('')
  }
 
  // For Deleting;
  function Delete(id){
  //  console.log("Delete")
 setArray(del => del.filter((i,index)=>{
  return index !== id;
 }))
  }
  return (
    <div>
      <input type="text" value={input} onChange={inputValue}/><button onClick={buttonlicked}>Add</button>
      {
        array.map((i,index)=>{
          return <ul><li>{i}</li><button onClick={()=>Delete(index)}>x</button></ul>
        })
      }
    </div>
  )
}

export default TodoList;






































// import React, { useState } from 'react'

// function TodoList() {
//   const [input,setInput] = useState('Mj virus')
//   function inputValue(event){
//     setInput(event.target.value)
//   }

//   const [arrayItem,setArrayItem] = useState([])
//   function Buttonclicked(){
//   setArrayItem((oldItem) =>{
//     return [input,...oldItem]
//   })
//   setInput('')
//   }

//   function Delete(id){
//       setArrayItem((oldItem)=>{
//         return oldItem.filter((element,index)=>{
//           return id !== index;
//         })
//       })
//   }
//   return (
    
//     <div>
//       <h1>Welcome to my TODO APP❤️</h1>
//       <input type="text" name="" id="" value={input} onChange={inputValue}/>
//       <input type="button" onClick={Buttonclicked} value='Add' />
//       <ol>
//         {
//           arrayItem.map((i,index)=>{
//           return <li>{i} <button onClick={()=>{Delete(index)}}>x</button></li>
//         })}
//       </ol>
//     </div>
//   )
// }

// export default TodoList;