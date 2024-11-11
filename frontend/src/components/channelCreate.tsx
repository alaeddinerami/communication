import { useState } from 'react';

export default function ChannelCreate() {
  const [channelName, setChannelName] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 bg-gray-900 text-center font-sans">
      
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-200">Create Your Channel</h1>
        <p className="mt-2 text-lg text-gray-400">Start connecting with your community in real-time!</p>
      </div>

      <div className="flex gap-12 items-center justify-center">
        

        <div className="w-80 p-8 rounded-2xl bg-slate-800 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Channel Details</h2>
          
          <input
            className="w-full p-3 mb-4 rounded-lg bg-gray-700 border border-gray-500 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            type="text"
            placeholder="Channel Name"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
          />
          
          <label className="flex items-center justify-between p-2 text-gray-400 cursor-pointer">
            <span>Private Channel</span>
            <div className="relative inline-block">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isPrivate}
                onChange={() => setIsPrivate(!isPrivate)}
              />
              <div className="block w-12 h-6 rounded-full bg-gray-700 peer-checked:bg-green-500"></div>
              <div className="absolute top-1 left-1 w-4 h-4 bg-gray-400 rounded-full transition-transform transform peer-checked:translate-x-6"></div>
            </div>
          </label>

          <button className="w-full mt-6 py-3 bg-green-600 rounded-lg text-gray-100 font-semibold text-sm uppercase transition-transform duration-200 transform hover:scale-105">
            Create Channel
          </button>
        </div>

        <img className="w-80 h-80" src="public/groupIcon.svg" alt="Channel Icon" />
      </div>


      <div className="mt-10">
        <p className="text-gray-400 text-md">Ready to create your space? Customize your channel details above.</p>
      </div>
    </div>
  );
}
