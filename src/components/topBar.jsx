import React from 'react'
import LockOpenIcon from '@mui/icons-material/LockOpen';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/reducer';
function TopBar() {
  const navigate = useNavigate()
  const dispatch = useDispatch() 
  const token = localStorage.getItem('token')
  return (
    <div className='grid grid-rows-2  mx-auto  h-32 border-b border-gray-300'>
      <div className='row-span-1 bg-custom'>
        <h1 className='text-white web-regular text-xl text-center mt-3'>Generate secured and effective passwords for your wealth .</h1>
      </div>
      <div className='row-span-1 flex items-center justify-around'>
        <span >
          <VpnKeyIcon fontSize='large' />
        </span>
        <span className='flex justify-center w-fit  gap-10 items-center h-full'>
        <a href='/' className='web-medium text-lg '>
          Generate
        </a>
        <a href='/savedPasswords' className='web-medium  text-lg '>
          Saved Passwords 
        </a>
        
        </span>
        {
          token?(
            <span onClick={()=>{
              localStorage.removeItem('token')
              dispatch(logout())
              navigate('/')
            }
            }  className='cursor-pointer web-medium hover:bg-red-600 hover:text-white border px-2 border-red-600 rounded py-1 flex items-center text-lg text-red-600'>
          <LockOpenIcon/>
          Logout
        </span>
          ):(
<span onClick={()=>navigate('/signin')}  className='cursor-pointer web-medium hover:bg-orange-600 hover:text-white border px-2 border-orange-600 rounded py-1 flex items-center text-lg text-orange-600'>
          <LockOpenIcon/>
          SignIn
        </span>
          )
        }
        
      </div>
    </div>
  )
}

export default TopBar
