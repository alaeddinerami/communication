import { createBrowserRouter , Outlet } from "react-router-dom";
import Layout from "../pages/layout/layout";
import UserRouter from "./userRouter";
import NotFound from "../pages/layout/notFound";



const Router = createBrowserRouter([
    

    {
        element: <Layout/>,
        children: UserRouter
    },

    {

        element: <Outlet/> ,
        children:[{         
            
            path: "*",
            element: <NotFound />}]
    },
  

])

export default Router