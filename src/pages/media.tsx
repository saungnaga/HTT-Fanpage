import MediaCard from "../components/mediaCard";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";

function Media() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="grid grid-cols-auto-fill-media p-4 gap-y-4 min-h-screen flex-grow">
          {/* <div className="flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="bg-[url('https://i.redd.it/ulri50744m5a1.jpg')] bg-cover bg-center rounded-3xl">
              <MediaCard />
            </div>
            <div className="text-white text-4xl font-bold cursor-pointer absolute">Manga</div>
          </div> */}
          <a href="/media/anime" className="flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="bg-[url('https://upload.wikimedia.org/wikipedia/id/1/19/K-On%21_DVD_volume_1_cover.jpg')] bg-cover bg-center rounded-3xl">
              <MediaCard />
            </div>
            <div className="text-white text-4xl font-bold cursor-pointer absolute">Anime</div>
          </a>
          <a href="/media/concert" className="flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="bg-[url('https://m.media-amazon.com/images/I/718zO2G0CDL._AC_UF894,1000_QL80_.jpg')] bg-cover bg-center rounded-3xl">
              <MediaCard />
            </div>
            <div className="text-white text-center text-4xl font-bold cursor-pointer absolute">Live<br/>Concert</div>
          </a>
          <a href="/media/photos" className="flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="bg-[url('https://c4.wallpaperflare.com/wallpaper/625/39/749/anime-girls-k-on-nakano-azusa-kotobuki-tsumugi-wallpaper-thumb.jpg')] bg-cover bg-center rounded-3xl">
              <MediaCard />
            </div>
            <div className="text-white text-center text-4xl font-bold cursor-pointer absolute">Photos</div>
          </a>
          <a href="/media/fanart" className="flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="bg-[url('https://png.pngitem.com/pimgs/s/301-3013356_k-on-yui-hirasawa-fanart-hd-png-download.png')] bg-cover bg-center rounded-3xl">
              <MediaCard />
            </div>
            <div className="text-white text-center text-4xl font-bold cursor-pointer absolute">Fan Art</div>
          </a>
          {/* <div className="flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="bg-[url('https://i.ytimg.com/vi/UR-FDwumz-E/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAxQ_tP8D2gm3dDidFTId-JGrNKxg')] bg-cover bg-center rounded-3xl">
              <MediaCard />
            </div>
            <div className="text-white text-center text-4xl font-bold cursor-pointer absolute">Youtube<br/>Videos</div>
          </div> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;
