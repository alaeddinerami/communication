import Home from "../pages/home";
import UserChat from "../pages/userChat";


const UserRouter = [

    {
        path: "/",
        element: <Home />
    },
    {
        path: "/chat",
        element :<UserChat/>
    }

]

export default UserRouter;