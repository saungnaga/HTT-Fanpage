import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";

function Music() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <iframe
          className="h-dvh"
          src="https://open.spotify.com/embed/album/3SJPNJ3dMplHK8UeFy295k?utm_source=generator"
          width="100%"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
}

export default Music;
