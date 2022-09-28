import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

function CallApi() {
  const [value, setValue] = useState(null)
  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    axios.get(url).then((res) => {
      setValue(res.data)
    }, [])
  })

  function deleteItem(id){
    value.filter((i,index) => {
      return index !== id
    })
  }

  return (
    <div className='hdiv'>
      <h1 className='mt-3'>API Call from AXIOS❤️</h1>

     <div className="container-fluid mt-3 ">
      <div className="row gy-3">
      {value != null && value.map((i, index) => {
        return <Card title={i.title} body={i.body} delete={() => deleteItem(index)} unique={index}/>
      })}
      </div>
     </div>

    </div>
  )
}

export default CallApi