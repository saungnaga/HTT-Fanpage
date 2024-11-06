import Collage from "../../components/collage";
import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";


const images = [
    "https://w0.peakpx.com/wallpaper/246/86/HD-wallpaper-ritsu-tainaka-k-on-anime-drum-drums-girl-keion-music.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4R7F6JRoq9hWhx5I7EHk2ZKxn-cfk1z840g&s",
    "https://64.media.tumblr.com/813dd855a7fd019044ac27f4db460279/tumblr_nlodghJVM41u4kvfxo1_1280.jpg",
    "https://i.ebayimg.com/images/g/BbcAAOSwdfdjbQCB/s-l1200.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrw-zLe7QAK59S9eYzLO51M8khbOzmPf8C5w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZEbmnLfyqmnXBDAfFqRqh2ZoSp9MDWg09w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFzVSi5K9DRMGKQeTFgP31C62eMckBzNA_hw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYBwE4Ml-MknXBaEHaqVRtzCj0HtjIwkp1FA&s",
];  

const FanArt = () => {
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

export default FanArt;
