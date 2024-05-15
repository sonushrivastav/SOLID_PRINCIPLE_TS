import React from 'react'
import Product, { IProduct } from './Product'

const sampleProduct:IProduct ={
    id:"1",
    title:"Sample Product",
    price:29.99,
    rating:{rate:4.5},
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMNz9611tjSyMzj8Bh9BriCzxXuLKg5rcoiA&s"
}


const Good = () => {
  return (
    <div>
        <h1>good</h1>
    <Product product={sampleProduct}/>
    </div>
  )
}

export default Good