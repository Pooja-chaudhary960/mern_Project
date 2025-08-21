import React from 'react'
import ComponentC from './ComponentC';

function ComponentB({ numB = 0}) {
  return (
    <div style={{border: "1px solid", padding:"1rem"}}>
        <h1>ComponentB</h1>
        <ComponentC numC={numB}/>
        </div>
  )
}

export default ComponentB;