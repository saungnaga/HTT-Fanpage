import Flappy from "../components/flappy.tsx";
import ComingSoon from "../layouts/comingSoon.tsx";
import Footer from "../layouts/footer.tsx";
import Header from "../layouts/header.tsx";
import Sidebar from "../layouts/sidebar.tsx";

function Games() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <Flappy />
      </div>
      <Footer />
    </div>
  );
}

export default Games;
