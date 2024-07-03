import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userSignin } from '../services/userService'
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../redux/reducer'

function SignInComponent() {
    const dispatch = useDispatch()
    const [data,setData] = useState({
        email:'',
        pass:''
    })
    const [errors,setErrors] = useState({
        email:'',
        pass:'',
    })
    const handleSubmit = async () => {
        let valid = true;
        const errorsCopy = { ...errors };

        if (!data.email.trim() || !/\S+@\S+\.\S+/.test(data.email)) {
          errorsCopy.email = 'Please enter a valid email address';
          valid = false;
        } else {
          errorsCopy.email = '';
        }
    
        if (!data.pass.trim() || data.pass.trim().length < 4) {
          errorsCopy.pass = 'Password must be at least 4 characters long';
          valid = false;
        } else {
          errorsCopy.pass = '';
        }
    
        
    
        setErrors(errorsCopy);
    
        if (valid) {
        
      
            try{
                const res = await userSignin(data)
                localStorage.setItem('token',res.data.token)
                dispatch(loginSuccess(res.data.token))
                navigate('/')
            }catch(err){
                console.log(err);
                if(err.response.data.message){
                    setErrors({
                        email:err.response.data.message.email,
                        pass:err.response.data.message.pass
                    })
                }
            }
        }
    }

    
    const navigate = useNavigate()
    return (
        <div className='h-[100vh] flex flex-row-reverse
         justify-evenly items-center bg-white'>
            <div className='h-[25rem] rounded-2xl flex flex-col justify-around items-center   bg-white shadow-md border w-[35rem]'>
                <h1 className='web-bold text-xl'>SignIn - Remember your secrets !</h1>
                <div className='flex flex-col gap-10 h-auto container px-5'>
                    
                <div className="relative h-10 w-full">
                        <input
                        value={data.email}
                        onChange={(e)=>setData(prev=>({...prev,email:e.target.value}))}
                            className={`${errors.email?'border-red-500':''} peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                            placeholder=""
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none web-regular absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Email Address
                        </label>
                    <p className='text-sm web-regular text-red-500'>{errors.email}</p>
                    </div>
                    <div className="relative h-10 w-full">
                        <input
                        value={data.pass}
                        onChange={(e)=>setData(prev=>({...prev,pass:e.target.value}))}
                            className={`${errors.pass?'border-red-500':''}peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-orange-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                            placeholder=" "
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none web-regular absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                            Password
                        </label>
                        <p className='text-sm web-regular text-red-500'>{errors.pass}</p>

                    </div>
                    
                    <div className='flex flex-col    h-auto container px-5'>
                        <button onClick={handleSubmit} className='bg-blue-500 px-5 py-2 rounded-md text-white web-regular'>SignIn</button>
                        <p onClick={()=>navigate('/signup')} className='text-center text-md web-regular text-orange-400 underline'>Not yet registered?SignUp</p>
                    </div>
                </div>
            </div>
            <div className='h-[35rem] flex justify-center items-center'>
                <img src='https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=1480&t=st=1719903884~exp=1719904484~hmac=4fe11a7db5189cc9c76bb9627f827ab0054c171c98d6947b08e7ca9baa2c787f' className='h-[30rem]' />
            </div>
        </div>
    )
}

export default SignInComponent
