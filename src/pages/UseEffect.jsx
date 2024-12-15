import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [products, setProducts] = useState([])


  const baseUrl = import.meta.env.VITE_BASE_URL

  const fetchProducts = async () => {
      fetch(`${baseUrl}/products`)
        .then((res) => res.json())
        .then((json) => setProducts(json.products));
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  const renderProducts = () => {
    return products.map((product) => {
      return (
        <div key={product.id}>
          <ul>
            <li>{product.id}</li>
            <li>{product.title}</li>
            <li>{product.description}</li>
            <li>
            <img 
              src={product.images[0]} 
              alt={product.title} 
              className='size-40'
            />
          </li>
          </ul>
        </div>
      );
    })
  }

  return (
    <div>
      {renderProducts()}
    </div>
  )
}

export default UseEffect