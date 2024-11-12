import Home from "../pages/home";
import UserChat from "../pages/userChat";
import Channel from "../pages/channel";
import ChannelCreat from "../components/channelCreate";
import FriendsPanel from "../components/friendsPanel";
import Profile from "../pages/profile";

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
    {
        path : "/profile",
        element : <Profile/>
    }

]

export default UserRouter;