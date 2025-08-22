import React from 'react'
import ComponentB from './ComponentB';
import { decrement, increment } from './redux/counterSlice';
import {useDispatch, useSelector} from 'react-redux';

const ComponentA=()=>{
  const dispatch = useDispatch();

const { count } = useSelector((state)=>state.counter);

 
  function increaseCounter (){
     dispatch(increment());
    console.log("increase counter");
  }

  function decreaseCounter (){
    dispatch(decrement());
    console.log("decrease counter")
  }
  return (
    
       <div style={{border: "1px solid", padding:"1rem"}}>
       <h1>ComponentA</h1>
       <p> value of A:{count}</p>
       <button onClick={increaseCounter}>Increase Counter</button>
        <button onClick={decreaseCounter}>Decrease Counter</button>
        <ComponentB numB={count}/>
        </div>
  )
}

export default ComponentA;