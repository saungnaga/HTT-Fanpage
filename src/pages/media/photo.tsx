import Collage from "../../components/collage";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";
import kon1 from "../../assets/k-on1.jpg"
import kon2 from "../../assets/k-on2.jpg"
import kon3 from "../../assets/k-on3.jpg"
import kon4 from "../../assets/k-on4.jpg"
import kon5 from "../../assets/k-on5.jpg"
import kon6 from "../../assets/k-on6.jpg"
import kon7 from "../../assets/k-on7.jpg"
import kon8 from "../../assets/k-on8.jpg"

const images = [
    kon7, kon2, kon3, kon4, kon5, kon1, kon6, kon8
  ];  

const Photos = () => {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <Collage images={images}/>
      </div>
      <Footer />
    </div>
  );
}

export default Photos;
