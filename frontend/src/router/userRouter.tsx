import Home from "../pages/home";
import UserChat from "../pages/userChat";
import Channel from "../pages/channel";
import ChannelCreate from "../components/channelCreate";
import FriendsPanel from "../components/friendsPanel";
import Profile from "../pages/profile";
import ProtectedRoute from "./guard";

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
        path: "/channel",
        element: (
            <ProtectedRoute>
                <Channel />
            </ProtectedRoute>
        )
    },
    {
        path: "/CreatChannel", // No ProtectedRoute here
        element: <ChannelCreate /> // This will allow access without restriction
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
