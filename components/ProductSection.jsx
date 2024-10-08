import React, { useContext, useEffect, useState } from 'react'
import Card  from '../components/Card'
import { CartContext } from "../contexts/cartContext"

const ProductSection = () => {
  let {products, fetchProducts} = useContext(CartContext)

  useEffect(() => {
    fetchProducts()
  },[])

  // let [products, setProducts] = useState([])
  // useEffect(() => {
  //   fetch('https://dummyjson.com/products')
  //   .then(res => res.json())
  //   .then(data => setProducts(data.products));
  // },[])
  return (
<section className="product_section layout_padding">
  <div className="container">
    <div className="heading_container heading_center">
      <h2>
        Our <span>products</span>
      </h2>
    </div>
    <div className="row">

      {
        products.map(product => {
          return <Card key={product?.id} id={product.id} title={product.title} image={product.images[0]} price={product.price} />
        })
      }
    </div>
    <div className="btn-box">
      <a href="">View All products</a>
    </div>
  </div>
</section>

  )
}

export default ProductSection