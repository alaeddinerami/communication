

export default function Notifications() {
  return (


   <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-70 dark:bg-gray-900 dark:border-gray-700">
        <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">Notifications</h2>

        <div className="mt-8 space-y-4">
            

            <div className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <div className="text-center">
                    <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">Mia send you a message!!</h1>    
                </div>
            </div>

            <div className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <div className="text-center">
                    <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">mohammed liked your message</h1>    
                </div>
            </div>
            
            <div className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <div className="text-center">
                    <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-white">mehdi baned you from the channel</h1>    
                </div>
            </div>

        </div>
    </div>  )
}
