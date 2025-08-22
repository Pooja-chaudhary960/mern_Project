import React, { useEffect, useState, useRef } from 'react';
import Card from './Card';
import "./App.css"
import ComponentA from './ComponentA';
import ProductsTable from './ProductsTable';
import './index.css'
import Header from './Header';

function App() {
  const [count, setCount] = useState(0);

  const titleRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(
    ()=>{
      console.log(count);
      console.log(titleRef);
    },
    [count] //dependencies (state variable)
  );

  // useState hook return two array item. In that array item first item is stateVariable example count and second item is function to update State Variable example setCount.
  // useState is a hook which helps in local state Management.

  return (
    <div>  
      <ProductsTable />
      <span>count: {count}</span>
      <ComponentA numA={count} />
    
      <button onClick={()=>setCount(count + 1)}>click</button>

      <h1 ref={titleRef}>Hello world</h1>

      <input type='text' ref={inputRef} />

      <Card title="Samsung galaxy A24" brand="samsung" price={30000}/>
      <Card title="Vivo 19 pro" brand="Vivo" price={22000} />
      <Card title="Iphone 14" brand="Iphone" price={100000} />
      <Card title="Redmi Note 9 Pro" brand="Redmi"  /> 
   

    </div>
  );
}

export default App;
