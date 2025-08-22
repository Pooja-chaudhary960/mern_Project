import React, { useEffect } from 'react'
import ComponentD from './ComponentD';
import { useDispatch, useSelector } from 'react-redux';
import { setCube } from './redux/counterSlice';

function ComponentC({ numC = 0 }) {
  const { count } = useSelector((state)=> state.counter);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setCube(count * count * count));
  }, [count]);
  return (
   
    <div style={{border: "1px solid", padding:"1rem"}}>
        <h1>ComponentC</h1>
        <p>Value of A:{numC}</p>
        <p>Value of C:{count * count * count}</p>

        <ComponentD />
        </div>
  )
}

export default ComponentC;