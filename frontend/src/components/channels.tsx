

export default function Channels() {
  return (


   <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-70 dark:bg-gray-900 dark:border-gray-700">
        <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">Channels</h2>

        <div className="mt-8 space-y-4">
            
            <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt=""/>
            
                <div className="text-left rtl:text-right">
                    <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">chaniile tv</h1>    
                </div>
            </button>

            <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <img className="object-cover w-8 h-8 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80" alt=""/>
            
                <div className="text-left rtl:text-right">
                    <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">youcode</h1>    
                </div>
            </button>
  
        </div>
    </div>  )
}
