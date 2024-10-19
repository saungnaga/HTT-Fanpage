import Footer from "../layouts/footer";
import Header from "../layouts/header";
import ShopMain from "../layouts/shopMain";
import ShopCard from "../components/shopCard";
import Sidebar from "../layouts/sidebar";

function ShopPage() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <ShopMain />
          <div id="product" className="grid grid-cols-auto-fill-shop gap-4 p-2">
            <ShopCard
              image="https://m.media-amazon.com/images/I/41D2A9U+ZbL.jpg"
              price="$24.99"
              title="Action Figure Yui Hirasawa"
            />
            <ShopCard
              image="https://ae01.alicdn.com/kf/H59f21d6a83b742ccb8a14644dfd5ffc91.jpg?width=1000&height=1000&hash=2000"
              price="$12.99"
              title="T-Shirt: Azusa's Song in making"
            />
            <ShopCard
              image="https://m.media-amazon.com/images/I/518X9JD-l8L._AC_UY1000_.jpg"
              price="$4.69"
              title="Key Chains"
            />
            <ShopCard
              image="https://ih1.redbubble.net/image.5279991618.4910/st,small,507x507-pad,600x600,f8f8f8.jpg"
              price="$7.99"
              title="YuiAzu on London, Photocard"
            />
            <ShopCard
              image="https://animota.net/cdn/shop/files/FIGURE-013408_01.jpg?v=1726725649&width=533"
              price="$32.99"
              title="Action Figure Azusa"
            />
            <ShopCard
              image="https://www.kawaiies.com/cdn/shop/files/kawaiies-plushies-plush-softtoy-anime-k-on-yui-akiyama-heart-unisex-tee-apparel-cream-xs-387714.webp?v=1713726209"
              price="$16.99"
              title="Yui Hirasawa's Daily T-Shirt"
            />
            <ShopCard
              image="https://down-id.img.susercontent.com/file/1e9bfc2e2f93da7ef2bf3839e2ef61a4"
              price="$9.99"
              title="Totebag Mio Surprised"
            />
            <ShopCard
              image="https://i.etsystatic.com/49240908/r/il/1de694/6006849941/il_fullxfull.6006849941_rflf.jpg"
              price="$7.99"
              title="Mug: Colonel Ritsu"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ShopPage;
