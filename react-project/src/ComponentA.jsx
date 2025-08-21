import React from 'react'
import ComponentB from './ComponentB';

function ComponentA({ numA = 0}) {
  return (
    
    <div>
        value: {numA + 5}
        <ComponentB numB={numA + 5 }/>
        </div>
  )
}

export default ComponentA;