import React from 'react'
import ShieldIcon from '@mui/icons-material/Shield';
import PasswordIcon from '@mui/icons-material/Password';
import DifferenceIcon from '@mui/icons-material/Difference';
function TipComponent() {
  return (
    <div className='h-[30rem] bg-orange-100/85 flex flex-col justify-center gap-10 items-center'>
      <h1 className='text-4xl web-bold text-center'>What makes a password strong ?</h1>
      <div className='flex justify-evenly gap-10 w-fit h-4/6'>
      <span className='h-60 w-80 px-5 border flex flex-col items-center justify-evenly border-orange-400 bg-orange-50 rounded-2xl'>
        <ShieldIcon fontSize='large' className='text-orange-600'/>
        <p className='text-lg web-semibold '>Long</p>
        <p className='text-md web-regular'>The longer password the secure it is.A strong password should at least 10 characters.</p>
      </span>
      <span className='h-60 w-80 px-5 border flex flex-col items-center justify-evenly border-orange-400 bg-orange-50 rounded-2xl'>
        <DifferenceIcon fontSize='large' className='text-orange-600'/>
        <p className='text-lg web-semibold '>Unique</p>
        <p className='text-md web-regular'>The longer password the secure it is.A strong password should at least 10 characters.</p>
      </span><span className='h-60 w-80 px-5 border flex flex-col items-center justify-evenly border-orange-400 bg-orange-50 rounded-2xl'>
        <PasswordIcon fontSize='large' className='text-orange-600'/>
        <p className='text-lg web-semibold '>Complex</p>
        <p className='text-md web-regular'>The longer password the secure it is.A strong password should at least 10 characters.</p>
      </span>
      </div>
    </div>
  )
}

export default TipComponent
