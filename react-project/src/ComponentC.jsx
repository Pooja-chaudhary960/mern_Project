import React from 'react'

function ComponentC({ numC = 0 }) {
  return (
   
    <div style={{border: "1px solid", padding:"1rem"}}>
        <h1>ComponentC</h1>
        <p>Value of A:{numC}</p>
        <p>Value of C:{numC * numC * numC}</p>
        </div>
  )
}

export default ComponentC;