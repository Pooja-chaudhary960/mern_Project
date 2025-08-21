import React, { useState } from 'react';

  function Card({ title, brand, price=20000}) {
    const [favorite, setFavorite] = useState(false);
  
  return (
    <div className='card'>
      <h1>{title}</h1>
      <span>{price}</span>
      <p>{brand}</p>
      {favorite ? <span> ❤️ </span> :null}
      <button onClick={()=>setFavorite(!favorite)}>{favorite ? "Favorite" : "Not Favorite"}</button>

    </div>
  );
}

export default Card;
