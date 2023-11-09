import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'

export default function Featured() {
  const prods = [
    {id: 1, title: "Mens shirt white", src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 2, title: "Mens fancy t-shirt Black", src: "https://images.unsplash.com/photo-1593726891090-b4c6bc09c819?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 278},
    {id: 3, title: "Mens jeans LightBlue", src: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 600},
    {id: 4, title: "Mens Hoodie Orange", src: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D", price: 550},
  ]
  return (
    <div className='w-full mt-8 flex flex-col'>
      <h1 className='font-bold text-2xl tracking-tighter mb-2 text-center'>Featured</h1>
      <div className='grid w-full gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
        {
          prods.map(el => <Product src={el.src} key={el.id} title={el.title} price={el.price} />)
        }
      </div>
      <Link to={'/all'}><button className='w-full mt-4 text-xs text-white bg-black rounded-md p-2 py-3'>explore all &rarr;</button></Link>
    </div>
  )
}
