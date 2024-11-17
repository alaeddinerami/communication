import { useState } from 'react';
import axios from 'axios'; // Import axios for API calls

export default function ChannelCreate() {
  const [channelName, setChannelName] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [loading, setLoading] = useState(false); // State to manage loading status

  // Function to handle form submission
  const handleCreateChannel = async () => {
    if (!channelName.trim()) {
      alert('Please enter a channel name!');
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:3000/api/channels', { // Update with your API URL
        name: channelName,
        private: isPrivate,
      });
      alert('Channel created successfully!');
      setChannelName(''); // Reset channel name
      setIsPrivate(false); // Reset privacy toggle
    } catch (error) {
      console.error('Error creating channel:', error);
      alert('Failed to create channel. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full px-4 bg-gray-900 text-center font-sans">
      
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-200">Create Your Channel</h1>
        <p className="mt-2 text-lg text-gray-400">Start connecting with your community in real-time!</p>
      </div>

      <div className="flex gap-12 items-center justify-center">
        
        {/* Channel Creation Form */}
        <div className="w-80 p-8 rounded-2xl bg-slate-800 shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Channel Details</h2>
          
          {/* Channel Name Input */}
          <input
            className="w-full p-3 mb-4 rounded-lg bg-gray-700 border border-gray-500 placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-600"
            type="text"
            placeholder="Channel Name"
            value={channelName}
            onChange={(e) => setChannelName(e.target.value)}
          />
          
          {/* Private Channel Toggle */}
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

          {/* Create Channel Button */}
          <button
            className="w-full mt-6 py-3 bg-green-600 rounded-lg text-gray-100 font-semibold text-sm uppercase transition-transform duration-200 transform hover:scale-105 disabled:bg-gray-500"
            onClick={handleCreateChannel}
            disabled={loading} // Disable the button when loading
          >
            {loading ? 'Creating...' : 'Create Channel'}
          </button>
        </div>

        {/* Channel Icon */}
        <img className="w-80 h-80" src="/groupIcon.svg" alt="Channel Icon" />
      </div>

      <div className="mt-10">
        <p className="text-gray-400 text-md">Ready to create your space? Customize your channel details above.</p>
      </div>
    </div>
  );
}
