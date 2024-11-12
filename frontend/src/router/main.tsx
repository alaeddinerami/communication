import { createBrowserRouter , Outlet } from "react-router-dom";
import Layout from "../pages/layout/layout";
import UserRouter from "./userRouter";
import NotFound from "../pages/layout/notFound";
import VideoChat from "../pages/viedoChat";
import Register from "../pages/rigester";



const Router = createBrowserRouter([
    

    {
        element: <Layout/>,
        children: UserRouter
    },

    {

        element: <Outlet/> ,
        children:[
            
            {         
            path: "*",
            element: <NotFound />
            },
            {
            path: "/viedoChat",
            element : <VideoChat/>
            },
            {
            path: "register",
            element : <Register/>
            }
        
        ]
    },
    
  

])

export default Router