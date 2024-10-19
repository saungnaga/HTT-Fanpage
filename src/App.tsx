import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ShopPage from "./pages/shop";
import Music from "./pages/music";
import Media from "./pages/media";
import Longue from "./pages/lounge";
import Votes from "./pages/votes";
import Credits from "./pages/credits";
import Games from "./pages/games";
import Support from "./pages/support";
import Anime from "./pages/media/anime";
import Chords from "./pages/chords";
import Htt2 from "./pages/music/htt2";
import Photos from "./pages/media/photo";
import FanArt from "./pages/media/fanArt";
import Concert from "./pages/media/concert";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "/shop", element: <ShopPage /> },
  { path: "/music", element: <Music /> },
  { path: "/media", element: <Media /> },
  { path: "/lounge", element: <Longue /> },
  { path: "/votes", element: <Votes /> },
  { path: "/credits", element: <Credits /> },
  { path: "/chords", element: <Chords /> },
  { path: "/games", element: <Games /> },
  { path: "/support", element: <Support /> },
  { path: "/media/anime", element: <Anime /> },
  { path: "/media/concert", element: <Concert /> },
  { path: "/media/photos", element: <Photos /> },
  { path: "/media/fanart", element: <FanArt /> },
  { path: "/music/htt2", element: <Htt2 /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
