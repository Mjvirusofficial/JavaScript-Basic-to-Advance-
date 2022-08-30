import './State.css';
import React, { Component } from 'react'

export default class State extends Component {
  //Constructor
   constructor(){
    super();
   this.state = {
    name:'Deepak',
    count: 0
   }
   }

   //Update
   Update(){
    this.setState({
    count:this.state.count+1,
    name:'Mj virus❤️'
    })
   }
  render() {
    return (
      <div className='state'>
        <h1>Hello {this.state.name}</h1>
        <h1>Count:- {this.state.count}</h1>
        <button className='button' onClick={()=>{this.Update()}}>Increament</button>
      </div>
    )
  }
}
