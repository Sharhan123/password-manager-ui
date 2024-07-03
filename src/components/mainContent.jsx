import React, { useEffect, useState } from 'react';
import ReplayIcon from '@mui/icons-material/Replay';
import ModalExample from './alert';
import RangeSlider from './slider';
import SavePassword from './savePassword';
const MainContent = () => {
    const [password, setPassword] = useState('');
    const [open,setOpen] = useState(false)
    const [length,setLength] = useState(8)
    const [strong,setStrong] = useState('Very Strong')
    const [useUppercase, setUseUppercase] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useDigits, setUseDigits] = useState(true);
    const [useSpecial, setUseSpecial] = useState(false);
    const [save,setSave] = useState(false)
    const [saved,setSaved] = useState(false)
    const generateRandomPassword = () => {
        const cap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        const small = '0123456789';
        const special = '!@#$&^%*';
        
        let characterSet = '';
        if (useUppercase) characterSet += cap;
        if (useLowercase) characterSet += chars;
        if (useDigits) characterSet += small;
        if (useSpecial) characterSet += special;

        let newPassword = '';
        for (let i = 0; i < length; i++) {
            newPassword += characterSet.charAt(Math.floor(Math.random() * characterSet.length));
        }
        return newPassword;
    };

    const change = () => {
        const newPassword = generateRandomPassword();
        let data = password.split('');

        for (let i = 0; i < newPassword.length; i++) {
            setTimeout(() => { 
                data[i] = newPassword[i];
                setPassword(data.join(''));
            }, i * 100); 
        }
    };

    const lengthChange = ()=>{
        const newPassword = generateRandomPassword();
        setPassword(newPassword)
        if(length <4){
            setStrong('Very Weak')
            return
        }
        if(length <6){
            setStrong('Weak')
            return
        }
        if(length < 10 ){
            setStrong('Strong')
            return
        }

        if(length <15){
            setStrong('Very Strong')
            return
        }
    }

    useEffect(()=>{
        lengthChange()
        
    },[length, useUppercase, useLowercase, useDigits, useSpecial])
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password).then(() => {
            setOpen(true)
        }, () => {
            alert('Failed to copy password to clipboard.');
        });
    };


    return (
        <div className='h-[36rem] grid grid-rows-3'>
            <SavePassword pass={password} finished={()=>{setSaved(true)}} open={save} close={()=>setSave(false)} />
            <ModalExample open={open} text={'Copied to clipboad'} close={()=>setOpen(false)} />
            <ModalExample open={saved} text={'saved password !'} close={()=>setSaved(false)} />
            <div className='row-span-1 flex flex-col items-center gap-5 justify-center'>
                <h1 className='text-5xl web-bold'>
                    Random Password Generator
                </h1>
                <p className='text-lg web-medium text-gray-600'>
                    Create secure and safe password to make your account safe
                </p>
            </div>
            <div className='row-span-2 grid grid-cols-2 justify-around items-center'>
                <img className='h-96 col-span-1' src='https://thumbor.forbes.com/thumbor/fit-in/x/https://www.forbes.com/advisor/wp-content/uploads/2021/07/Business-Insurance.png' alt='Insurance' />
                <div className='col-span-1 flex flex-col justify-around items-center h-full'>
                    <span className='container h-24 flex  gap-5'>
                        <div className='w-4/6 h-14 border-gray-400 flex items-center justify-around shadow-inner border rounded-full'>
                            <p className='text-lg web-medium bg-orange-100 px-5 rounded spinning-text'>
                                {password.split('').map((char, index) => (
                                    <span key={index} className='spinning-char'>{char}</span>
                                ))}
                            </p>
                            <div className='flex items-center justify-between gap-5'>
                                <button className={`${strong === 'Very Weak'?'bg-red-500':''} ${strong === 'Weak'?'bg-orange-500':''} ${strong === 'Strong'?'bg-yellow-400':''} ${strong === 'Very Strong'?'bg-lime-500':''} px-4 rounded-md py-1 text-sm web-semibold`}>
                                    {strong}
                                </button>
                                <p onClick={change} ><ReplayIcon className='cursor-pointer' /></p>
                            </div>
                        </div>
                        <button onClick={()=>setSave(true)} className='cursor-pointer px-5 h-14 bg-green-500 text-white shadow-sm shadow-black rounded-full'>
                            save password
                        </button>
                        <button onClick={copyToClipboard} className='cursor-pointer px-5 h-14 bg-blue-600 text-white shadow-sm shadow-black rounded-full'>
                            Copy
                        </button>
                    </span>
                    <span className='h-20 flex  items-center justify-start gap-10 container'>
                        <p className='text-xl web-regular ' >Password Length : {length} </p>
                        <div className='flex  justify-between gap-5'>
                            <button onClick={()=>{if(length !==1) setLength(length-1)}} className='bg-white border border-blue-400 justify-center text-xl w-10 h-10 rounded-full'>
                                -
                            </button>
                        <input value={length} step={1} min={1} max={20} maxLength={20} onChange={(e)=>setLength(e.target.value)} className=' w-72'  type='range'/>
                        <button onClick={()=>{if(length !== 20){setLength(length+1)}}} className='bg-white border border-blue-400 justify-center text-xl w-10 h-10 rounded-full'>
                                +
                            </button>
                        </div>
                    </span>
                    <span className='h-20 flex  items-center justify-start gap-10  container'>
                    <p className='text-xl web-regular ' >Characters used : </p>

                       <div className='flex gap-5 items-center justify-center'>
                         <input className='h-5 w-5 accent-green-600' checked={useUppercase} onChange={(e) => setUseUppercase(e.target.checked)} value={'ABC'} type='checkbox' /><label className='web-regular text-lg'>ABC</label>
                         </div>
                       <div className='flex gap-5 items-center justify-center'>
                         <input className='h-5 w-5 accent-green-600' checked={useLowercase} onChange={(e) => setUseLowercase(e.target.checked)} value={'abc'} type='checkbox' /><label className='web-regular text-lg'>abc</label>
                         </div>
                       <div className='flex gap-5 items-center justify-center'>
                         <input className='h-5 w-5 accent-green-600' value={'123'} checked={useDigits} onChange={(e) => setUseDigits(e.target.checked)} type='checkbox' /><label className='web-regular text-lg'>123</label>
                         </div>
                       <div className='flex gap-5 items-center justify-center'>
                         <input className='h-5 w-5 accent-green-600' checked={useSpecial} onChange={(e) => setUseSpecial(e.target.checked)} value={'@#$'} type='checkbox' /><label className='web-regular text-lg'>@#$</label>
                         </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default MainContent;
