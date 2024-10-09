import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import ShopPage from "./pages/shop";
import Music from "./pages/music";
import Media from "./pages/media";
import Longue from "./pages/lounge";

const router = createBrowserRouter([
  { path:"/",
  element:<Home />},
  {path:"/shop", element:<ShopPage />},
  {path:"/music", element:<Music />},
  {path:"/media", element:<Media />},
  {path:"/lounge", element:<Longue />},
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
