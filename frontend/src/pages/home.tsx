import { FaComments, FaUserFriends, FaRocket  } from 'react-icons/fa';
import { Link } from 'react-router-dom';



export default function Home() {
  return (

    <div className="flex flex-col justify-center items-center h-full rounded-lg  bg-gray-800 text-center font-sans px-4">
    <div className="mb-8">

      <h1 className="text-4xl font-bold text-gray-200">Welcome to Your Chat Platform</h1>
      <p className="mt-2 text-xl text-gray-300">Connect with your friends, colleagues, or communities in real-time!</p>
    </div>

<div className='flex justify-center gap-12'>
<img className='w-72 h-72' src="public/homeIcon1.svg" alt="home icon" />

    <div className="space-y-8 mt-8">
      <Link to="/CreatChannel" className="flex items-center justify-center bg-blue-500 text-white text-xl py-4 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105">
        <FaRocket className="mr-3 text-2xl" />
        Create a Channel
      </Link>
      
      <Link to="/FriendsPanel" className="flex items-center justify-center bg-green-500 text-white text-xl py-4 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300 transform hover:scale-105">
        <FaComments className="mr-3 text-2xl" />
        Join a Channel
      </Link>
      
      <Link to="/FriendsPanel" className="flex items-center justify-center bg-indigo-500 text-white text-xl py-4 px-6 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300 transform hover:scale-105">
        <FaUserFriends className="mr-3 text-2xl" />
        Manage Friends
      </Link>
    </div>
</div>
    

    <div className="mt-8">
      <p className="text-lg text-gray-300">Ready to start chatting? Choose an option above!</p>
    </div>
  </div>
  )
}
