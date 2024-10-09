import Video from "../components/video";
import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";


function Media() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="grid grid-cols-auto-fill p-4 gap-10 w-full min-h-screen">
            <Video />
            <Video />
            <Video />
            <Video />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Media;
