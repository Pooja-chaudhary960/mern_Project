import React from 'react'

function ComponentC({ numC = 0 }) {
  return (
   
    <div>
        Cube:{numC * numC * numC}</div>
  )
}

export default ComponentC;