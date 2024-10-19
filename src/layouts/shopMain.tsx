function ShopMain() {
  return (
    <div className="container flex-1 border-2 rounded-3xl bg-[url('https://i.redd.it/nfttwjzcmng51.jpg')] bg-cover bg-center bg-opacity-50 relative z-0">
      <div className="absolute inset-0 bg-white/75  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>
      <div className="relative z-10 text-center p-8 sm:p-12 md:text-left">
        <h1 className="text-4xl font-bold text-gray-800 md:text-5xl">
          Join the Club! 🎸
        </h1>
        <p className="mt-4 text-lg text-gray-700 md:text-xl">
          Shop Exclusive K-ON Merchandise!
        </p>
        <p className="mt-2 text-gray-600">
          Iconic instruments, fun apparel, cute toys?<br/>Relive your favorite moments
          from Sakuragaoka's light music club!
        </p>
        <a
          href="#product"
          className="mt-6 inline-block px-8 py-3 bg-teal-600 text-white font-semibold rounded-full hover:bg-teal-700 transition duration-300"
        >
          Start Shopping
        </a>
      </div>
    </div>
  );
}

export default ShopMain;
