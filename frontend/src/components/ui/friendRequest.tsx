import axios from "axios";
import React, { useState , useEffect } from "react";

type UserCardProp = {
  UserName: string;
  email: string;
  id: string;
};

const FriendRequest: React.FC<UserCardProp> = ({ UserName, email , id }) => {



    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.log("User not found or not logged in"); 
      return;
    }
  
  
  
    const handleAccept = async ()=>{

        try{

            const res = await axios.post(`http://localhost:3000/friends/request/${id}/approve`);

            if(res.status === 201 || res.status === 200){
                console.log('request was aprove ')
            }

        }catch(err){
            
            console.log('error accepting request ',err)
        }
    }

    const handleReject = async ()=>{

        try{

            const res = await axios.post(`http://localhost:3000/friends/request/${id}/reject`);

            if(res.status === 201 || res.status === 200){
                console.log('request was rejected ')
            }

        }catch(err){
            
            console.log('error accepting request ',err)
        }
    }



  return (
    <div
      key={id}
      className="p-4 w-full bg-gray-600 rounded-lg shadow-md flex items-center mb-4 space-x-4"
    >
      <img
        className="h-16 w-16 rounded-full"
        src="public/avatar.png"
        alt="User's Avatar"
      />
      <div className="flex-1">
        
        <div className="space-y-0.5">
          <p className="text-base text-white font-semibold">{UserName}</p>
          <p className="text-xs text-white">{email}</p>
        </div>

        <div className="mt-3 space-x-2">


            <button onClick={handleReject} className="px-3 py-1 text-xs text-red-600 font-semibold rounded-full border border-red-300 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2">
            Reject
            </button>

            <button onClick={handleAccept} className="px-3 py-1 text-xs text-green-600 font-semibold rounded-full border border-green-300 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2">
              Accept
            </button>

        </div>
      </div>
    </div>  
  )
};

export default FriendRequest;
