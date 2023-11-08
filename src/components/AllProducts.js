import React from 'react'
import Product from './Product'

export default function AllProducts() {
  const prods = [
    {id: 1, src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 2, src: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 278},
    {id: 3, src: "https://images.unsplash.com/photo-1598032895455-526c9e347a87?q=80&w=2442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 600},
    {id: 4, src: "https://images.unsplash.com/photo-1598032895511-2692303da2af?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 550},
    {id: 5, src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 6, src: "https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 278},
    {id: 7, src: "https://images.unsplash.com/photo-1593726891090-b4c6bc09c819?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 600},
    {id: 8, src: "https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 550},
    {id: 9, src: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 10, src: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGplYW5zfGVufDB8fDB8fHww", price: 278},
    {id: 11, src: "https://images.unsplash.com/photo-1624378442362-d3247e8126ec?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 600},
    {id: 12, src: "https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 550},
    {id: 13, src: "https://images.unsplash.com/photo-1562044447-280a02d1cd22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 14, src: "https://images.unsplash.com/photo-1617953644310-e690da9be982?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 278},
    {id: 15, src: "https://images.unsplash.com/photo-1600267188217-39db4b60a8a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcnQlMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D", price: 600},
    {id: 16, src: "https://images.unsplash.com/photo-1686665255167-b9f712971cf2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 550},
    {id: 17, src: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D", price: 400},
    {id: 18, src: "https://plus.unsplash.com/premium_photo-1673829957321-f22b07e9b19d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D", price: 278},
    {id: 19, src: "https://images.unsplash.com/photo-1512401671639-e0ef01671b17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D", price: 600},
    {id: 20, src: "https://images.unsplash.com/photo-1608055599516-99caeb08ab3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D", price: 550}
  ];

  return (
    <div className='flex justify-center items-center'>
      <div className='w-1/4 h-full'>
        <h1>Left Section</h1>
      </div>
      <div className='w-full h-full p-4 flex flex-col border-l border-gray-300'>
        <div className='w-full flex'>
          <input type='text' className='outline-none border border-gray-300 rounded-l-md w-full px-2 py-1' />
          <button className='rounded-r-md bg-black px-3 py-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="font-bold w-4 h-4 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </button>
        </div>
        <div className='grid grid-cols-4 gap-3 mt-4'>
          {
            prods.map(el => <Product src={el.src} key={el.id} price={el.price}/>)
          }
        </div>
      </div>
    </div>
  )
}
