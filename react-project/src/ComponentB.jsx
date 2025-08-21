import React from 'react'
import ComponentC from './ComponentC';

function ComponentB({ numB = 0}) {
  return (
    <div>Square:{numB * numB }
    <ComponentC numC={numB * numB} />
    </div>
  )
}

export default ComponentB;