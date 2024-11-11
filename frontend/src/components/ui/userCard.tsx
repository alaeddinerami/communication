export default function UserCard() {
    return (
      <div className="p-4 bg-gray-600 rounded-lg shadow-md flex items-center mb-4 space-x-4">
        <img
          className="h-16 w-16 rounded-full"
          src="public/avatar.png"
          alt="Woman's Face"
        />
        <div className="flex-1">
          <div className="space-y-0.5">
            <p className="text-base text-white font-semibold">Erin Lindford</p>
            <p className="text-gray-300 text-sm font-medium">Product Engineer</p>
          </div>
          <div className="mt-3 space-x-2">
            <button className="px-3 py-1 text-xs text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Message
            </button>
            <button className="px-3 py-1 text-xs text-green-200 font-semibold rounded-full border border-green-400 hover:text-white hover:bg-green-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Add Friend
            </button>
          </div>
        </div>
      </div>
    );
  }
  