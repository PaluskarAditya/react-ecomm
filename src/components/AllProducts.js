import React, { useState } from 'react'
import Product from './Product'

export default function AllProducts() {
  const prods = [
    {id: 1,  title: "Mens shirt white", src: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2825&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 2,  title: "Mens shirt SkyBlue", src: "https://images.unsplash.com/photo-1594938291221-94f18cbb5660?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 278},
    {id: 3,  title: "Mens shirt Peach", src: "https://images.unsplash.com/photo-1598032895455-526c9e347a87?q=80&w=2442&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 600},
    {id: 4,  title: "Mens shirt LightBlue", src: "https://images.unsplash.com/photo-1598032895511-2692303da2af?q=80&w=2607&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 550},
    {id: 5,  title: "Mens fancy t-shirt Cream", src: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 6,  title: "Mens fancy t-shirt DarkBlue", src: "https://images.unsplash.com/photo-1589902860314-e910697dea18?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 278},
    {id: 7,  title: "Mens fancy t-shirt Black", src: "https://images.unsplash.com/photo-1593726891090-b4c6bc09c819?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 600},
    {id: 8,  title: "Mens fancy t-shirt White", src: "https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 550},
    {id: 9,  title: "Mens jeans LightBlue", src: "https://images.unsplash.com/photo-1582552938357-32b906df40cb?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 10, title: "Mens jeans DarkBlue",  src: "https://images.unsplash.com/photo-1555689502-c4b22d76c56f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGplYW5zfGVufDB8fDB8fHww", price: 278},
    {id: 11, title: "Mens jeans Black",  src: "https://images.unsplash.com/photo-1624378442362-d3247e8126ec?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 600},
    {id: 12, title: "Mens jeans LightBlack",  src: "https://images.unsplash.com/photo-1624378441864-6eda7eac51cb?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 550},
    {id: 13, title: "Mens shorts Blue",  src: "https://images.unsplash.com/photo-1562044447-280a02d1cd22?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 400},
    {id: 14, title: "Mens shorts Stylish Blue",  src: "https://images.unsplash.com/photo-1617953644310-e690da9be982?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 278},
    {id: 15, title: "Mens shorts SkyBlue",  src: "https://images.unsplash.com/photo-1600267188217-39db4b60a8a5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hvcnQlMjBwYW50c3xlbnwwfHwwfHx8MA%3D%3D", price: 600},
    {id: 16, title: "Mens shorts Grey",  src: "https://images.unsplash.com/photo-1686665255167-b9f712971cf2?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", price: 550},
    {id: 17, title: "Mens Hoodie Orange",  src: "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D", price: 400},
    {id: 18, title: "Mens Hoodie White Print",  src: "https://plus.unsplash.com/premium_photo-1673829957321-f22b07e9b19d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D", price: 278},
    {id: 19, title: "Mens Hoodie Black Print",  src: "https://images.unsplash.com/photo-1512401671639-e0ef01671b17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D", price: 600},
    {id: 20, title: "Mens Hoodie Blue Print",  src: "https://images.unsplash.com/photo-1608055599516-99caeb08ab3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGhvb2RpZXN8ZW58MHx8MHx8fDA%3D", price: 550}
  ];
  const [all, setAll] = useState(prods);
  const [isSrch, setVal] = useState(false)
  const [srch, setSrch] = useState('');


  const handleSearch = (name) => {
    if (!isSrch) {
      if (srch.length < 1) {
        alert('Please enter something to search...')
      } else {
        setVal(true);
        const new_items = all.filter(el => el.title.includes(srch))
        if (new_items.length > 0) {
          setAll(new_items);
        } else if (new_items.length < 1) {
          setAll(prods)
        }
      }
    } else {
      setVal(false);
      setAll(prods);
      setSrch('')
    }
  }

  const handleFilter = (e) => {
    if (e.target.checked) {
      setAll(all.filter(el => el.title.includes(e.target.name)));
    } else {
      setAll(prods);
    }
  }

  return (
    <div className='flex'>
      <div className='flex flex-col w-1/4 border-r border-gray-300 flex justify-start items-start p-4'>
        <h1 className='text-2xl'>Filters</h1>
        <div className='flex flex-col mt-2'>
          <div className='flex justify-start items-center'>
            <input id='checkbox1' type='checkbox' name='shirt' className='mr-1' onChange={handleFilter}/>
            <p className='text-sm'>Shirt</p>
          </div>
          <div className='flex justify-start items-center'>
            <input id='checkbox2' type='checkbox' name='t-shirt' className='mr-1' onChange={handleFilter}/>
            <p className='text-sm'>T-Shirt</p>
          </div>
          <div className='flex justify-start items-center'>
            <input id='checkbox3' type='checkbox' name='jeans' className='mr-1' onChange={handleFilter}/>
            <p className='text-sm'>Jeans</p>
          </div>
          <div className='flex justify-start items-center'>
            <input id='checkbox4' type='checkbox' name='Hoodie' className='mr-1' onChange={handleFilter}/>
            <p className='text-sm'>Hoodies</p>
          </div>
          <div className='flex justify-start items-center'>
            <input id='checkbox5' type='checkbox' name='shorts' className='mr-1' onChange={handleFilter}/>
            <p className='text-sm'>Shorts</p>
          </div>
        </div>
      </div>
      <div className='w-full h-full p-4 flex flex-col'>
        <div className='w-full flex'>
          <input value={srch} onChange={e => setSrch(e.target.value)} type='text' className='outline-none border border-gray-300 rounded-l-md w-full px-2 py-1' />
          <button onClick={handleSearch} className='rounded-r-md bg-black px-3 py-1 text-white'>
            {
              isSrch ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="font-bold w-4 h-4 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="font-bold w-4 h-4 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            }
          </button>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-3 mt-4'>
          {
            all.map(el => <Product title={el.title} price={el.price} src={el.src} key={el.id} prod={el} />)
          }
        </div>
      </div>
    </div>
  )
}
