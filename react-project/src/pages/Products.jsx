import React from 'react'
import { useSearchParams } from 'react-router';
import ProductsTable from '../ProductsTable';

const ProductsPage = () => {
    const [query] = useSearchParams();
    console.log(query);
    
    const brand = query.get("brand");
    const category = query.get("category");
    console.log({brand, category});
  
  return (
    <div>
        <h1>Product Page</h1>
        <p>Brand: {brand}</p>
        <p>Category: {category}</p>
        <ProductsTable />
    </div>
  )
}

export default ProductsPage;