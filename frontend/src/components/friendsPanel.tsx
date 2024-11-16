import UserCard from "./ui/userCard"
import ChannelCard from "./ui/channelCard"
import { useState , useEffect } from "react"
import axios from "axios"



type User = {

    _id : string;
    userName : string;
}

export default function FriendsPanel() {

    const [users , SetUsers] = useState<User[]>([])


    useEffect(()=>{


    const AllUsers = async ()=>{

        try{

            const res = await axios.get('http://localhost:3000/users/allUsers');
            SetUsers(res.data.users)

        }catch(err){

            console.log('error happend during users fetching', err);
        }

    }

    AllUsers();

},[])

    




  return (



<div className="flex h-full">



<div className="flex flex-wrap gap-2 w-[70%]">



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


<div className="ml-2 w-full h-[52%] bg-gray-800 rounded-lg shadow-lg overflow-y-auto p-4">
  <div className="flex justify-between items-center">
    
  
    <div className="flex justify-end mt-8">
      <img className="w-[50%]" src="public/primo.svg" alt="Chat illustration" />
    </div>
  </div>
</div>

</div>

<div className="ml-2 w-[30%] h-full bg-gray-800 rounded-lg shadow-lg overflow-y-auto">
<div className="p-3 border-b border-gray-500 rounded-full shadow-2xl">
    <h1 className="text-gray-300 text-center text-lg ">friends you may know </h1>
</div>
<div className="p-3 max-h-[88vh]  overflow-y-auto space-y-4">

    { users.map((user)=> (

    <UserCard id={user._id} UserName={user.userName} />

    )) }

</div>
</div>
</div>
  )
}
