import Footer from "../layouts/footer.tsx";
import Header from "../layouts/header.tsx";
import Main from "../layouts/mainpage.tsx";
import Sidebar from "../layouts/sidebar.tsx";

function Home() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
