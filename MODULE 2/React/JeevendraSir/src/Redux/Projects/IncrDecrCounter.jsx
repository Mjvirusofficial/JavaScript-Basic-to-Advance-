import React from 'react'
import { Increment,Decrement } from './Redux/Action';
import rootReducer from "./Redux/AllReducer";
import { useDispatch, useSelector } from "react-redux";



function IncrDecrCounter() {
const state = useSelector((state) => state.Incr_Decr_Reducer)
const dispatch = useDispatch(rootReducer)
    return (
        <div>
            <div className="box">
                <h1>Increment/Decrement Counter❤️</h1>
                <div className="box-2">
                    <h2>{state}</h2>
                    <button className="btn" onClick={() => dispatch(Decrement())}>Decr</button><span><button className="btn" onClick={() => dispatch(Increment())}>Incr</button></span>
                </div>
            </div>
        </div>
    )
}

export default IncrDecrCounter;