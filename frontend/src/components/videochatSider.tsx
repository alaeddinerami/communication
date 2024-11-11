import VideoChatInput from "../components/ui/inputs/videoChatInput";


interface closeSider {
    closeIt: () => void; 
  }


export default function VideoChatSider({closeIt}: closeSider){

    

    return(

        <div className="w-80 bg-gray-800 rounded-lg my-4 mx-2 p-4 flex flex-col">

          <div className="flex-grow mb-4 overflow-y-auto  border-b border-gray-600">

            <div className="flex  w-full border-b mb-4 p-2 border-gray-600">

                <h2 className="text-lg font-bold">Chat</h2>
                <div className="flex justify-end w-full">
                <svg onClick={closeIt} className="justify-end cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                </div>
             
            </div>

            <div className="space-y-2">

              <p className="hover:bg-gray-700 p-2 rounded-lg"><span className="font-bold text-blue-400 ">User:</span> Hello!</p>
              <p className="hover:bg-gray-700 p-2 rounded-lg"><span className="font-bold text-blue-400 ">You:</span> Hi, ready to start?</p>

            </div>

          </div>

            <div className="border-b pb-3 border-gray-600">
            <VideoChatInput/>
            </div>  
        </div>
    )
}