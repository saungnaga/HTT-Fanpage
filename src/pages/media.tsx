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
        <div className="flex p-4 gap-4 min-h-screen items-start justify-center flex-grow">
          <div className="flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="bg-[url('https://i.redd.it/ulri50744m5a1.jpg')] bg-cover bg-center rounded-3xl">
              <MediaCard />
            </div>
            <div className="text-white text-4xl font-bold cursor-pointer absolute">Manga</div>
          </div>
          <div className="flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="bg-[url('https://upload.wikimedia.org/wikipedia/id/1/19/K-On%21_DVD_volume_1_cover.jpg')] bg-cover bg-center rounded-3xl">
              <MediaCard />
            </div>
            <div className="text-white text-4xl font-bold cursor-pointer absolute">Anime</div>
          </div>
          <div className="flex justify-center items-center hover:scale-105 transition-all duration-300">
            <div className="bg-[url('https://m.media-amazon.com/images/I/718zO2G0CDL._AC_UF894,1000_QL80_.jpg')] bg-cover bg-center rounded-3xl">
              <MediaCard />
            </div>
            <div className="text-white text-center text-4xl font-bold cursor-pointer absolute">Live<br/>Concert</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;
