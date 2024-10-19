import  Sidebar  from "../../layouts/sidebar.tsx";
import Playlist from "../../components/playlist.tsx";
import Header from "../../layouts/header.tsx";
import Footer from "../../layouts/footer";
import album from "../../assets/album-hokago-II.jpg"

function Htt2() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <Playlist title="Houkago Tea Time II" image={album} description="Second album from HTT. The recording process appear on anime episode 23." link="https://open.spotify.com/embed/album/3SJPNJ3dMplHK8UeFy295k?utm_source=generator"/>
      </div>
      <Footer />
    </div>
  );
}

export default Htt2;
