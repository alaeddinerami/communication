import axios from "axios";
import { useNavigate } from "react-router-dom";


const navigate = useNavigate()



const AxiosInstance = axios.create({

    
    baseURL: 'http://localhost:3000/',
    timeout : 10000 ,
    headers: {
        "Content-Type" : "application/json",
    },
});


AxiosInstance.interceptors.request.use(

    (config)=>{

        const token = localStorage.getItem('authToken');
        
        if(token){

            config.headers['Authorization'] = `Bearer ${token}`;
        }


        return config;
    },
    (error)=>{

        return  Promise.reject(error);
    }

)

AxiosInstance.interceptors.response.use(
    
    (response) => response ,
    (error) =>{

        console.log(`api error ${error}`);
        if(error.response && error.response.status === 401){
            console.log('Unauthorized!');
            navigate('/login');

        }

        return  Promise.reject(error);
    }
)

export default AxiosInstance 