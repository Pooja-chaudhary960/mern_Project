import React from 'react';

function Card(props) {
  console.log(props); 

  const { title, brand, price} = props;
  return (
    <div className='card'>
      <h1>{title}</h1>
      <p>{brand}</p>
      <span>{price}</span>
    </div>
  );
}

export default Card;
