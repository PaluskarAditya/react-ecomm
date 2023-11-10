import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cartSlice/cartSlice';

export default function Product({ src, title, price, prod }) {
  const disp = useDispatch();
  const add = prod => disp(addToCart(prod));

  return (
    <div className='flex flex-col border border-gray-300 rounded-md p-4'>
      <div className='h-[17rem] w-full'>
        <img src={src} alt='hero-poster' className='rounded-md w-full h-full object-cover object-top' />
      </div>
      <div className='flex justify-between items-center mt-3'>
        <div className='flex flex-col justify-center items-start'>
          <h1 className='font-bold text-sm tracking-tighter'>{title}</h1>
          <p className='text-xs'>Rs.{price}</p>
        </div>
        <div className='flex'>
          <button className='bg-black text-white text-xs rounded-lg p-2 py-1 mx-1'>view</button>
          <button onClick={() => add(prod)} className='bg-black text-white text-xs rounded-lg px-1 py-1 ml-1'>add to cart</button>
        </div>
      </div>
    </div>
  )
}
