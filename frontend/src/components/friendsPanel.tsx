import UserCard from "./ui/userCard"
import ChannelCard from "./ui/channelCard"
import FriendRequest from "./ui/friendRequest"
import { useState , useEffect } from "react"
import axios from "axios"



type User = {

    _id : string;
    userName : string;
}

type FriendRequestType   = {
  _id: string;
  from: { _id: string; userName: string; email: string };
  status: string;
};

export default function FriendsPanel() {

    const [users , SetUsers] = useState<User[]>([])
    const [friendRequests  , SetRequest] = useState<FriendRequestType  []>([])


    const userId = localStorage.getItem('userId')



    useEffect(()=>{


    const AllUsers = async ()=>{

        try{

            const res = await axios.get('http://localhost:3000/users/allUsers');
            SetUsers(res.data.users)

        }catch(err){

            console.log('error happend during users fetching', err);
        }

    }

    const getUserRequests = async ()=>{

      if (!userId) {
        console.log("User ID not found in localStorage");
        return;
      }

      try{

        const res = await axios.get(`http://localhost:3000/friends/request/getRequests/${userId}`)
        SetRequest(res.data.requests);

      
      }catch(err){
        console.log('error happend during friensds request fetch',err);
      }
    }

    AllUsers();
    getUserRequests();

},[])


  return (



<div className="flex ">



<div className="flex flex-wrap h-full gap-2 w-[70%]">



<div>
<h1 className="text-center text-lg  text-gray-300" >Descover Other Channels  🚀</h1>
</div>
<div className="flex  items-center gap-3 p-2 bg-gray-700 rounded-lg shadow-lg overflow-x-auto">

          <div className="flex  gap-4 min-w-max">
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
            <ChannelCard />
          </div>
</div>


<div className="ml-2 w-full h-[52%] bg-gray-800 rounded-lg shadow-lg overflow-x-auto space-x-4 p-4">

<h1 className="pb-5 text-lg font-semibold  text-gray-300">Friends Request Send To You  🎉</h1>



  <div className="justify-between items-center">


{  

    friendRequests.length > 0  ? ( 
    
    friendRequests.map(( request )=> (

    <FriendRequest key={request._id} id={request._id} UserName={request.from.userName} email={request.from.email}/>

    ))

    ) : ( <p className="text-white text-center mt-12 mb-6 font-semibold">No friend requests for you yet. 🫂 </p>  )}

      
  </div>
  
</div>

</div>

<div className="ml-2 w-[30%] h-full bg-gray-800 rounded-lg shadow-lg overflow-y-auto">
<div className="p-3 border-b border-gray-500 rounded-full shadow-2xl">
    <h1 className="text-gray-300 text-center text-lg ">friends you may know </h1>
</div>
<div className="p-3 max-h-[88vh]  overflow-y-auto space-y-4">




{ users.length > 0 ? (

users.map((user)=> (

  <UserCard key={user._id} id={user._id} UserName={user.userName} />

  )) 

) : ( <p className="text-white text-center mt-12 mb-6 font-bold">no users</p> )

}


  

</div>
</div>
</div>
  )
}
