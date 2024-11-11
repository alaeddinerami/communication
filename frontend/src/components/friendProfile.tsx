


interface closeProfile {
    closeIt: () => void; 
  }

export default function FriendProfile({closeIt}:closeProfile) {
    return (
      <div className="ml-2 w-[30%] h-full bg-gray-800 rounded-lg shadow-lg overflow-hidden">

        <div className="flex justify-end p-2 ">

        <svg onClick={closeIt} xmlns="http://www.w3.org/2000/svg" style={{cursor:'pointer'}} height="28px" viewBox="0 -960 960 960" width="28px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </div>

        <div className="flex flex-col items-center justify-center p-6 bg-gray-800 border-b border-gray-500">

          <img className="w-24 h-24 rounded-full object-cover" src="/avatar.png" alt="Friend Avatar" />
  
          <h1 className="mt-4 text-white text-2xl font-semibold">Username</h1>
  
          <p className="mt-2 text-gray-300 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
          <p className="mt-2 text-green-400 text-sm">🟢Online</p>
          {/* <p className="mt-2 text-red-400 text-sm">🔴Offline</p> */}
        </div>
  


      </div>
    );
  }
  