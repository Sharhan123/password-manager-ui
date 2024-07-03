import React, { useEffect, useState } from 'react'
import { savePassword } from '../services/userService'



const SavePassword = ({ open, close ,pass,finished }) => { 
    const [label,setLabel] = useState('')
    const [error,setError] = useState('')
    
    const password = ()=>{
      let pat = ''
        for(let i=0;i<pass.length;i++){
            pat +='*'
        }
        return pat
    }
    const handleSubmit = async ()=>{
      try{
        const data ={
          label,
          password:pass
        }
        console.log('entered');
        if(label.trim().length < 4 ){
          console.log(label);
          setError('Please provide a label atleast 4 characters')
          return
        }
        const res = await savePassword(data)
        close()
        finished()
      }catch(err){
        console.log(err);
      }
    }
  return (

    <div
      role="dialog"
      id="modal-example"
      aria-hidden="true"
      // style={{ display: 'none'  }}
      className={` ${open ? 'flex' : 'hidden'} modal fixed top-0 left-0 z-50 w-screen h-screen bg-black/30  items-center flex-col justify-center p-6 fade`}
      tabIndex={-1}
    >
      <div className="bg-custom h-11/12 overflow-auto shadow-md rounded px-20 pt-10 pb-20 mb-4 flex flex-col my-2">
        <button onClick={() => close()} className="ml-auto bg-red-500 kanit-regular w-fit  opacity-100 hover:opacity-100 text-white hover:text-gray-900 rounded-md px-5 py-2 ">
          Close
        </button>
        <h1 className='text-2xl web-regular mb-6 text-yellow-400'>Save your secret to remember ! </h1>
       
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full   px-3">
          <label className="block text-start uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
              Label 
            </label>
            <input value={label} onChange={(e)=>{setLabel(e.target.value)}} placeholder='Please provide a label' className='w-full web-regular h-10 px-2 rounded bg-white' type='text' />

          </div>
          </div>

        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-full   px-3">
          <label className="block text-start uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
              Password 
            </label>
            <div className='w-full h-10 text-lg bold flex items-center justify-center text-black  rounded bg-white'>
                {password()}
            </div>
          </div>
          </div>
        
        <button onClick={handleSubmit} className="cursor-pointer bg-orange-500 kanit-regular  opacity-100 hover:opacity-100 text-white hover:text-gray-900 rounded-md px-10 py-2 ">
          save password
        </button>

 

      </div>

    </div>

  )
}

export default SavePassword
