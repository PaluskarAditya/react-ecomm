import React from 'react'

export default function Product({ src, price }) {
  return (
    <div className='flex flex-col border border-gray-300 rounded-md p-4'>
      <div className='h-[17rem] w-full'>
        <img src={src} alt='hero-poster' className='rounded-md w-full h-full object-cover object-top' />
      </div>
      <div className='flex justify-between items-center mt-3'>
        <div className='flex flex-col justify-center items-start'>
          <h1 className='font-bold text-sm tracking-tighter'>Product</h1>
          <p className='text-xs'>${price}</p>
        </div>
        <button className='bg-black text-white text-xs rounded-lg p-2 py-1'>view</button>
      </div>
    </div>
  )
}
