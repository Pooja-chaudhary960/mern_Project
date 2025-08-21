import React from 'react'
import ComponentB from './ComponentB';

function ComponentA({ numA = 0}) {
  return (
    
       <div style={{border: "1px solid", padding:"1rem"}}>
        <h1>ComponentA</h1>
       <span> value:{numA+5}</span>
        <ComponentB numB={numA + 5}/>
        </div>
  )
}

export default ComponentA;