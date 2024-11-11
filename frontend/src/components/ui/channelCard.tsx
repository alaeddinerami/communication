


export default function ChannelCard() {
    return (
        <div className="bg-gray-500  p-6 rounded-lg shadow-md text-white  mx-auto">
        <div className="flex justify-center p-3">
        <img  className="w-16 h-16 rounded-full" src="public/wall.png" alt="" />
        </div>
          <h3 className="text-xl text-center font-bold mb-2">name</h3>
          <p className="text-sm mb-4 text-center text-gray-200">Lorem ipsum dolor sit amet</p>
          <button className="w-full py-2 text-sm font-semibold text-purple-600 bg-white rounded-md hover:bg-gray-100 transition duration-200">
            Join Channel
          </button>
    </div>
    
    );
  }
  