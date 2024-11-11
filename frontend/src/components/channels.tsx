import { Link } from "react-router-dom"

export default function Channels() {
  return (


   <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-70 dark:bg-gray-900 dark:border-gray-700">
        <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">Channels</h2>

        <div className="mt-8 space-y-4">
            
            <Link to={'/channel'}>
            <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt=""/>
            
                <div className="text-left rtl:text-right">
                    <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">chaniile tv</h1>    
                </div>
            </button>
            </Link>
          
            <Link to={'/channel'}>
            <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80" alt=""/>
            
                <div className="text-left rtl:text-right">
                    <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">youcode</h1>    
                </div>
            </button>
            </Link>


                <div className="px-2 border-t border-gray-600 pt-2">
                    <Link to={'CreatChannel'}>
                    <button
                    className="flex justify-center items-center gap-2 w-full h-8  cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#14b8a6] via-[#059669] to-[#047857] hover:shadow-lg hover:shadow-green-800 hover:scale-105 duration-300 hover:from-[#047857] hover:to-[#14b8a6]"
                    >
                    <svg className="w-5 fill-white" viewBox="0 0 15 15">
                        <svg
                        className="w-6 h-6"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                        ></path>
                        </svg>
                    </svg>
                    </button>
                    </Link>
                </div>



  
        </div>
    </div> 
     )
}
