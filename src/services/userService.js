import axiosWithAuth from "./axiosConfig";
export const userSignup = async (data)=>{
    try{
        const response = await axiosWithAuth.post('/user/userRegister',data)
        return response
    }catch(err){
        throw err
    }
}

export const userSignin = async (data)=>{
    try{
        const response = await axiosWithAuth.post('/user/userSignin',data)
        return response
    }catch(err){
        throw err
    }
}

export const savePassword = async (data)=>{
try{
    const response = await axiosWithAuth.post('/user/savePassword',data)
    return response
}catch(err){
    throw err
}
}

export const getPasswords = async ()=>{
try{
    const response = await axiosWithAuth.get('/user/getPasswords')
    return response
}catch(err){
    throw err
}
}
