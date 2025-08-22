import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const ProductDetailspage = () => {
    const params = useParams();
    const [product, setProduct] = useState();
    console.log({params});
    useEffect(()=>{
        fetch(`https://node-20250302.vercel.app/api/products/${params.id}`)
        .then((res)=>res.json())
        .then((data)=> setProduct(data));
    }, [params]);

    if(!product) return <>Loading...</>
  return (
    <div>
        <h1> Product Details Page</h1>

        <ul>
            <li>Name: {product.name}</li>
            <li>brand: {product.brand}</li>
            <li>category: {product.category}</li>
            <li>price: {product.price}</li>
        </ul>
    </div>
  );
};

export default ProductDetailspage;