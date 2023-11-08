import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [display, setDisp] = useState(false);
  const [auth, setAuth] = useState(true);
  const [cred, setCred] = useState({uname: "", email: "", pass: ""});
  
  return (
    <nav className='flex justify-between items-center p-4 border-b border-gray-200'>
      {
        display ? <div className='z-50 bg-black/50 h-screen fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center'>
          {
            auth ? <div className='bg-white rounded-md p-4 relative'>
              <div className='flex flex-col mt-2'>
                <input placeholder='username or email' type='text' className='border border-gray-200 rounded-md outline-none px-2 py-1 text-sm' name='uname' value={cred.uname} onChange={e => setCred({...cred, [e.target.name]: e.target.value})} />
                <input placeholder='password' type='password' className='mt-2 border border-gray-200 rounded-md outline-none px-2 py-1 text-sm' name='pass' value={cred.pass} onChange={e => setCred({...cred, [e.target.name]: e.target.value})} />
                <button className='rounded-md bg-black text-white text-sm p-2 py-[5px] mt-2'>
                  login
                </button>
                <p className='cursor-pointer text-xs text-center mt-2 text-gray-500'>new here? <span className='text-black' onClick={() => setAuth(!auth)}>signup</span></p>
                <div className='flex mt-2 justify-center items-center'>
                  <hr className='bg-gray-400 flex-1' />
                  <p className='text-center text-xs text-gray-500 mx-2'>or</p>
                  <hr className='bg-gray-400 flex-1' />
                </div>
                <div className='mt-1'>
                <button className='flex justify-center items-center w-full rounded-md bg-black text-white text-sm p-2 py-[5px] mt-2'>
                  <img src='/google.png' height={14} width={14} />
                  <p className='ml-2 text-sm'>Google</p>
                </button>
                </div>
              </div>
              <button className='absolute top-[3px] right-[3px]' onClick={() => setDisp(!display)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div> : <div className='bg-white rounded-md p-4 relative'>
              <div className='flex flex-col mt-2'>
                <input placeholder='username or email' type='text' className='border border-gray-200 rounded-md outline-none px-2 py-1 text-sm' />
                <input placeholder='password' type='username' className='mt-2 border border-gray-200 rounded-md outline-none px-2 py-1 text-sm' />
                <input placeholder='password' type='password' className='mt-2 border border-gray-200 rounded-md outline-none px-2 py-1 text-sm' />
                <button className='rounded-md bg-black text-white text-sm p-2 py-[5px] mt-2'>
                  signup
                </button>
                <p onClick={() => setAuth(!auth)} className='cursor-pointer text-xs text-center mt-2 text-gray-500'>already a user? <span className='text-black'>login</span></p>
              </div>
              <button className='absolute top-[3px] right-[3px]' onClick={() => setDisp(!display)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          }
        </div> : ""
      }
      <ul>
        <li>
          <Link to={'/'} className='font-bold tracking-tighter text-2xl m-0'>Home</Link>
        </li>
      </ul>
      <ul className='flex justify-between items-center gap-4'>
        <li>
          <Link to={'/'} onClick={() => setDisp(!display)} >login</Link>
        </li>
        <li>
          <button className='py-2 bg-black text-white rounded-xl px-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  )
}
