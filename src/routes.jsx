import Feed from "./pages/Feed";
import ChannelDetail from "./pages/ChannelDetail";
import VideoDetail from "./pages/VideoDetail";
import SearchFeed from "./pages/SearchFeed";

export const routes = [
  { path: "/", element: <Feed /> },
  { path: "/video/:id", element: <VideoDetail /> },
  { path: "/channel/:id", element: <ChannelDetail /> },
  { path: "/search/:searchTerm", element: <SearchFeed /> },
];
