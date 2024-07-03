import React, { useEffect, useState } from 'react'
import { getPasswords } from '../services/userService'
import ModalExample from './alert'
import Loader from './loader'

function SavedPasswords() {
    const [data,setData] = useState()
    const [open,setOpen] = useState(false)
    useEffect(()=>{
        const fetch = async ()=>{
            try{
                const res = await getPasswords()
                console.log(res.data.data);
                setData(res.data.data)
            }catch(err){
                console.log(err);
            }
        }
        fetch()
    },[])
    const copyToClipboard = (password) => {
        navigator.clipboard.writeText(password).then(() => {
            setOpen(true)
        }, () => {
            alert('Failed to copy password to clipboard.');
        });
    };

  return (
    <div className='h-[100vh] px-2 py-5 bg-orange-50 gap-5 grid grid-cols-4'>
       <ModalExample text={'copied to clipboard'} close={()=>setOpen(false)} open={open}  />
        {
            data?(

                data[0]?data.map((item,index)=>(
                    <div key={index} className='h-16 flex items-center w-full justify-around col-span-1 border border-orange-500 rounded-md bg-white'>
            <h1 className='text-lg web-bold px-2'>{item.label}</h1>
            <h1 className='text-md web-semibold rounded-md px-2 bg-green-100'>{item.password}</h1>
            <button onClick={()=>copyToClipboard(item.password)} className='px-4 py-1 bg-blue-600 text-center flex items-center text-white web-reguar rounded-full'>copy</button>
        </div>
            )):(
                <h1 className='text-xl web-regular text-black mx-auto'>No Passwords</h1>
            )
        ):(
           <Loader/> 
        )
        }
        
    </div>
  )
}

export default SavedPasswords
