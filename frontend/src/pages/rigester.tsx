import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";




const Register: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    const navigate = useNavigate(); 


    const register = async (name: string, email: string): Promise<void> => {
        try {
            const res = await axios .post('http://localhost:3000/users/register', { userName: name, email: email });

            console.log('Registration successful:', res.data);

            if(res.status === 200 || res.status === 201){

                navigate('/login');
            }

        } catch(err) {
            console.error('Registration failed:', err);
        }
    };
    

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        

        if (!name || !email) {
            console.error('Please fill in all fields.');
            return;
        }

        try {
            await register(name, email);

        } catch(err) {
            console.log('Error while registering');
        }
    };
    
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="relative py-3 mt-20 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <form onSubmit={handleRegister}  >
                        <div className="max-w-md mx-auto text-white">
                            <div className="mt-5 gap-5">
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block" htmlFor="fullname">
                                        Full Name
                                    </label>
                                    <input
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Name"
                                        type="text"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-400 pb-1 block" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-800 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5"></div>
                            <div className="flex justify-center items-center">
                                <div>
                                    <button
                                        className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                    >
                                        <svg
                                            viewBox="0 0 24 24"
                                            height="25"
                                            width="25"
                                            y="0px"
                                            x="0px"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z"
                                                fill="#F44336"
                                            ></path>
                                            <path
                                                d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z"
                                                fill="#2196F3"
                                            ></path>
                                            <path
                                                d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z"
                                                fill="#FFC107"
                                            ></path>
                                            <path
                                                d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z"
                                                fill="#00B060"
                                            ></path>
                                            <path
                                                opacity=".1"
                                                d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z"
                                            ></path>
                                        </svg>
                                        <span className="ml-2">Sign up with Google</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button
                                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                    type="submit"
                                >
                                    Sign up
                                </button>
                            </div>
                            <Link to="/login" className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                                <a className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline" href="#">
                                    have an account? Log in
                                </a>
                                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
