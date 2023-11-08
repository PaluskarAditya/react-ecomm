import React from 'react'
import HeroPoster from './components/HeroPoster'
import Featured from './components/Featured'

export default function App() {
  return (
    <div className='flex flex-col p-4'>
      <HeroPoster />
      <Featured />
    </div>
  )
}
