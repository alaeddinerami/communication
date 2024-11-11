import ResivedMessage from "../components/ui/chatPop";
import UserMessage from "../components/ui/userMessage";
import ChannelHeader from "../components/ui/channelHeader";
import ChannelInput from "../components/ui/inputs/channelInput";
import ChannelMembers from "../components/channelMembers";
import { useState } from "react";


export default function Channel() {

  const [view, setView] = useState("chat"); 


  return (


    <div className="flex h-full ">

    <div className="w-full h-full bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl flex flex-col bg-opacity-90">

      <div className="border-b border-gray-700 pb-2">

        <ChannelHeader onMembersClick={() => setView("members")}/>
      </div>


      <div className="flex-1 max-h-[70vh] p-6 overflow-y-auto space-y-4">


        <div className="text-center text-gray-400 py-4 flex flex-col items-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🌟</span>
            <h3 className="text-lg font-semibold text-gray-300">Welcome to the Conversation</h3>
          </div>
          <p>This is the beginning of your chat in this channel</p>
          <p>Say hello or send a message to start the conversation!</p>
          <hr className="w-1/2 border-t border-gray-700 my-4" />
        </div>

        {/* <ResivedMessage />
        <UserMessage />
        <ResivedMessage /> */}

      </div>

      <div className="p-2 border-t border-gray-700">
        <ChannelInput />
      </div>
    </div>

    { view === 'members' && <ChannelMembers closeIt={()=>setView('chat')}/>}  

  </div>

  );
}
