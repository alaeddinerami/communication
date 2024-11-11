import VideoChatSider from "../components/videochatSider";
import VideoControll from "../components/ui/videoChatControll";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function VideoChat() {


    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


     const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
      };


    return (
      <div className="flex h-screen bg-gray-900 text-white">
        <div className="flex-1 relative bg-gray-800 rounded-lg my-4 mx-2 p-4">
          <div className="flex gap-4 h-[80%]">


            <div className="relative bg-gray-700 rounded-lg w-full flex items-center justify-center">
              <video
                className="w-full h-full object-cover rounded-lg"
                src="main-participant.mp4"
                autoPlay
                muted
              ></video>
              <span className="absolute top-2 left-2 text-sm bg-gray-800 px-2 py-1 rounded">You</span>
            </div>


            <div className="relative bg-gray-700 rounded-lg w-full flex items-center justify-center">
              <video className="w-full h-full object-cover rounded-lg" autoPlay></video>
              <span className="absolute top-2 left-2 text-sm bg-gray-800 px-2 py-1 rounded">User Name</span>
            </div>
          </div>


          <div className="flex justify-center gap-8 item-center mt-6">

        <Link to={'/'}>
        <button className="p-3 bg-blue-600 rounded-full hover:bg-blue-500">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M360-240 120-480l240-240 56 56-144 144h488v-160h80v240H272l144 144-56 56Z"/></svg>
        </button>
        </Link>
        
            <VideoControll />
            
        <div  >
        <button onClick={toggleDropdown} className="p-3 bg-green-600 rounded-full hover:bg-green-500">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M240-400h320v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>
        </button>
        </div>
          </div>
        </div>


        { isDropdownOpen  &&   <VideoChatSider closeIt={()=> setIsDropdownOpen(false)} /> }  

      </div>
    );
}
