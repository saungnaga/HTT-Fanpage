import ComingSoon from "../layouts/comingSoon.tsx";
import Footer from "../layouts/footer.tsx";
import Header from "../layouts/header.tsx";
import Sidebar from "../layouts/sidebar.tsx";

function Credits() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <ComingSoon />
      </div>
      <Footer />
    </div>
  );
}

export default Credits;
