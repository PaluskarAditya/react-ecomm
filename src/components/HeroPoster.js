import React from 'react'

export default function HeroPoster() {
  return (
    <div className='relative w-full h-96 bg-red-300 rounded-md'>
      <img src='/hero.jpeg' className='w-full h-full object-cover object-center rounded-md' alt='hero-poster' />
      <div className='flex justify-center items-center absolute top-0 bottom-0 left-0 right-0 bg-black/40 rounded-md'>
        <h1 className='text-white font-bold tracking-tighter lg:text-7xl md:text-6xl'>Ecommerce</h1>
      </div>
    </div>
  )
}
