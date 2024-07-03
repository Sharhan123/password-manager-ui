import React from 'react'

function Loader() {
  return (
    <div className="fixed flex items-center justify-center bg-black/30 z-10 inset-0 overflow-y-auto">
      <h1 className='text-xl text-white '>Loading...</h1>
    </div>
  )
}

export default Loader
