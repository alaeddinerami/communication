import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {


    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);  
    const [error, setError] = useState<string | null>(null); 
    const navigate = useNavigate();

    const login = async (name: string, email: string): Promise<void> => {
        setLoading(true); 
        try {
            const res = await axios.post('http://localhost:3000/users/login', { name, email });

            console.log('login successful:', res.data);
            if (res.status === 201 || res.status === 200) {

                localStorage.setItem('token', res.data.token); 
                navigate('/home'); 
            }
        } catch (err: any) {
            console.error('login failed:', err);
            setError('Login failed. Please check your credentials.');
        } finally {
            setLoading(false); 
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            await login(name, email);
        } catch (err) {
            console.log('Error while Login');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="relative py-3 mt-20 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-black mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <form onSubmit={handleLogin}>
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
                            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                            <div className="flex justify-center items-center">
                                <div>
                                    <button
                                        className="flex items-center justify-center py-2 px-20 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                    >

                                        <svg
                                            viewBox="0 0 24 24"
                                            height="25"
                                            width="25"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >

                                        </svg>
                                        <span className="ml-2">Login with Google</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-5">
                                <button
                                    className="py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                                    type="submit"
                                    disabled={loading}
                                >
                                    {loading ? 'Logging in...' : 'Login'}
                                </button>
                            </div>
                            <Link to="/register" className="flex items-center justify-between mt-4">
                                <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                                <a className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">
                                    Don’t Have an account? Sign Up
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

export default Login;
