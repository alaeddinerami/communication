// main.tsx or UserRouter.tsx (your route configuration file)
import Home from "../pages/home";
import UserChat from "../pages/userChat";
import Channel from "../pages/channel";
import ChannelCreate from "../components/channelCreate";
import FriendsPanel from "../components/friendsPanel";
import Profile from "../pages/profile";
import ProtectedRoute from "./guard";
import VideoCall from "../components/videoCall";

const UserRouter = [
    {
        path: "/home",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        )
    },
    {
        path: "/chat",
        element: (
            <ProtectedRoute>
                <UserChat />
            </ProtectedRoute>
        )
    },
    {
        path: "/video",
        element: (
            <ProtectedRoute>
                <VideoCall />
            </ProtectedRoute>
        )
    },
    {
        path: "/channel",
        element: (
            <ProtectedRoute>
                <Channel />
            </ProtectedRoute>
        )
    },
    {
        path: "/CreatChannel",
        element: (
            <ProtectedRoute>
                <ChannelCreate />
            </ProtectedRoute>
        )
    },
    {
        path: "/FriendsPanel",
        element: (
            <ProtectedRoute>
                <FriendsPanel />
            </ProtectedRoute>
        )
    },
    {
        path: "/profile",
        element: (
            <ProtectedRoute>
                <Profile />
            </ProtectedRoute>
        )
    }
];

export default UserRouter;
