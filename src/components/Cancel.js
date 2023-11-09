import React, { useEffect } from 'react'

export default function Cancel() {
  useEffect(() => {
    setTimeout(() => {
      window.location = 'http://localhost:3000';
    }, 3000)
  }, [])

  return (
    <div className='h-screen bg-red-600 flex justify-center items-center'>
      <h1 className='text-4xl font-bold tracking-tighter text-white'>Your order was successfully Placed!!!</h1>
    </div>
  )
}
