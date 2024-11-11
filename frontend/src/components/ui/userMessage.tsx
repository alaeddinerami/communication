

export default function UserMessage() {
   return (
     <div className="flex items-start gap-2.5 justify-end">

       <div className="flex flex-col gap-1 w-full max-w-[320px] items-end">
         <div className="flex items-center space-x-2 rtl:space-x-reverse">
           <span className="text-sm font-semibold text-gray-900 dark:text-white">User</span>
           <span className="text-sm font-normal text-gray-500 dark:text-gray-300">11:46</span>
         </div>
         <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-blue-200 rounded-s-xl rounded-se-xl dark:bg-blue-700">
           <p className="text-sm font-normal text-gray-900 dark:text-white">
             That's awesome
           </p>
         </div>
       </div>
 
       <img
         className="w-12 h-12 rounded-full"
         src="/public/avatar.png"
         alt="User image"
       />
 
     </div>
   );
 }
 