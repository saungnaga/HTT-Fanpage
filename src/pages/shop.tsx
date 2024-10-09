import Footer from "../layouts/footer";
import Header from "../layouts/header";
import ShopMain from "../layouts/shop";
import ShopCard from "../layouts/shopCard";
import Sidebar from "../layouts/sidebar";

function ShopPage() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
            <ShopMain />
            <div className="grid grid-cols-auto-fill gap-4 p-2">
                <ShopCard />
                <ShopCard />
                <ShopCard />
                <ShopCard />
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;