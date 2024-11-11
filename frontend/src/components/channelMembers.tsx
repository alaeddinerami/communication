import { Link } from "react-router-dom";


interface closeProfile {
    closeIt: () => void; 
  }

export default function ChannelMembers( {closeIt}: closeProfile ) {
    return (
      <div className="ml-2 w-[30%] h-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">

        <div className="flex justify-end p-2 ">

        <svg onClick={closeIt} xmlns="http://www.w3.org/2000/svg" style={{cursor:'pointer'}} height="28px" viewBox="0 -960 960 960" width="28px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>


        <h1 className="text-center font-bold text-white border-b p-2 mb-6 text-lg border-t border-gray-600">Channel Members</h1>
            

        <Link to={'/chat'}>
            <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                    <img className="object-cover w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=faceare&facepad=3&w=688&h=688&q=100" alt=""/>
                
                    <div className="text-left rtl:text-right">
                        <h1 className="font-medium text-gray-700 capitalize dark:text-white">Mia John</h1>   
                        <span className="text-sm text-green-500">🟢Online</span> 
                        {/* <span className="text-sm text-red-500">🔴Offline</span>  */}
                    </div>
                </button>
            </Link>
               
            <Link to={'/chat'}>
                <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                    <img className="object-cover w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&h=880&q=80" alt=""/>
                
                    <div className="text-left rtl:text-right">
                        <h1 className="font-medium text-gray-700 capitalize dark:text-white">arthur melo</h1>
                        <span className="text-sm text-green-500">🟢Online</span>
                        {/* <span className="text-sm text-red-500">🔴Offline</span>       */}
                    </div>
                </button>
            </Link>
            
            
      </div>
    );
  }
  