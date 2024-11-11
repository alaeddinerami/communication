import Home from "../pages/home";
import UserChat from "../pages/userChat";
import Channel from "../pages/channel";
import ChannelCreat from "../components/channelCreate";
import FriendsPanel from "../components/friendsPanel";


const UserRouter = [

    {
        path: "/",
        element: <Home />
    },
    {
        path: "/chat",
        element :<UserChat/>
    },
    {
        path: "/channel",
        element : <Channel/>
    },
    {
        path: "/CreatChannel",
        element : <ChannelCreat/>
    },
    {

        path: "/FriendsPanel",
        element : <FriendsPanel/>
    },

]

export default UserRouter;