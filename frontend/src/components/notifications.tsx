import NotificationCard from "./ui/notificationCard"

export default function Notifications() {
  return (


   <div className="h-screen py-8 overflow-y-auto bg-white border-l border-r sm:w-64 w-70 dark:bg-gray-900 dark:border-gray-700">
        <h2 className="px-5 text-lg font-medium text-gray-800 dark:text-white">Notifications    🔔</h2>

        <div className="mt-8 space-y-4">
            

        <NotificationCard id={'id'} userName={'mohammed'} content={'mohammed send you message'} time={'12:11'}/>


        </div>
    </div>  )
}
