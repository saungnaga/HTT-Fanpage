import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ShopPage from "./pages/shop";
import Music from "./pages/music";
import Media from "./pages/media";
import Longue from "./pages/lounge";
import Votes from "./pages/votes";
import Credits from "./pages/credits";
import Memes from "./pages/memes";
import Games from "./pages/games";
import Support from "./pages/support";

const router = createBrowserRouter([
  { path:"/",
  element:<Home />},
  {path:"/shop", element:<ShopPage />},
  {path:"/music", element:<Music />},
  {path:"/media", element:<Media />},
  {path:"/lounge", element:<Longue />},
  {path:"/votes", element:<Votes />},
  {path:"/credits", element:<Credits />},
  {path:"/memes", element:<Memes />},
  {path:"/games", element:<Games />},
  {path:"/support", element:<Support />},
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
