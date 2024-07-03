import React from 'react'

function Navbar() {
  return (
    <div className='h-16 w-4/5 grid grid-cols-4 fixed bottom-8   mx- lg:left-36 md:left-24 sm:left-16 left-10 rounded-md bg-custom '>
      
      <div className='col-span-1 flex'> 
        
        <div className='flex items-center ml-5 gap-2 w-full'>
            <img src='https://cdn-icons-png.freepik.com/512/2471/2471610.png' className='h-10 rounded-full w-10' />
            <h1 className='web-semibold text-white text-3xl'>NordPass</h1>
        </div>
      </div>
      <div className='col-span-3 grid grid-cols-4'>
        <div className='col-span-3'>
        </div>
        <div className='col-span-1 flex justify-end mr-5 items-center gap-1'>
        <div className='w-4 h-4 rounded-full bg-yellow-400'></div>
        <div className='w-4 h-4 rounded-full bg-green-600'></div>
        <div className='w-4 h-4 rounded-full bg-red-600'></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
