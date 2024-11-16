import React, { useState } from "react"


type NotificationCardProps = {

    userName : string;
    content : string;
    id : string;
    time : string;


}


 const NotificationCard: React.FC<NotificationCardProps> = ({userName , content , id , time}) =>{


    return(

        <div key={id} className="relative flex items-center w-full p-3 rounded-r-3xl border-b border-gray-600 cursor-pointer transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none group">
            <img className="w-8 h-8 rounded-full" src="public/avatar.png" alt="Avatar" />    
            <div className="flex-1">
                <h1 className="text-sm font-medium text-gray-400 capitalize text-xs ">
                    <span className="font-bold text-gray-200 text-xs mr-1">{userName}</span>{content}</h1>
                <span className="text-xs text-gray-500">{time}AM</span>
            </div>    
            <button className="absolute top-3 right-1 p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 focus:outline-none">
                <svg className="w-4 h-4 text-gray-400 hover:text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 8.586l-3.293-3.293a1 1 0 10-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 001.414 1.414L10 11.414l3.293 3.293a1 1 0 001.414-1.414L11.414 10l3.293-3.293a1 1 0 00-1.414-1.414L10 8.586z" clipRule="evenodd"/>
                </svg>
            </button>
        </div>

    )
}

export default NotificationCard 