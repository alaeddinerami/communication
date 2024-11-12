import AxiosInstance from "./axios";




export const register = async (name : string , email : string )=>{

    return await AxiosInstance.post('/users/register' , {name , email});

}


export const login = async ( name : string , email : string )=>{

    const res = await AxiosInstance.post('/users/login' , { name , email});

    if(res.data.token){

        localStorage.setItem('authToken', res.data.token);
    }


    return res.data

}


export const logout = async ()=>{

    localStorage.removeItem('authToken');

}