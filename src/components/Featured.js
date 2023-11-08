import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'

export default function Featured() {
  const prods = [
    {id: 1, src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 1, src: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 278},
    {id: 1, src: "https://images.unsplash.com/photo-1598032895455-526c9e347a87?q=80&w=2442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 600},
    {id: 1, src: "https://images.unsplash.com/photo-1598032895511-2692303da2af?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 550},
  ]
  return (
    <div className='w-full mt-8 flex flex-col'>
      <h1 className='font-bold text-2xl tracking-tighter mb-2 text-center'>Featured</h1>
      <div className='grid w-full gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
        {
          prods.map(el => <Product src={el.src} key={el.id} price={el.price} />)
        }
      </div>
      <Link to={'/all'}><button className='w-full mt-4 text-xs text-white bg-black rounded-md p-2 py-3'>explore all &rarr;</button></Link>
    </div>
  )
}
