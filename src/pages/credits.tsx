import Footer from "../layouts/footer.tsx";
import Header from "../layouts/header.tsx";
import Sidebar from "../layouts/sidebar.tsx";

function Credits() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-2">
          <div className="text-3xl font-bold">All Bless to:</div>
          <div className="p-2">
            <div className=" m-2 flex gap-1 items-center">
              <div className="shrink-0  w-1/2 flex flex-col items-center justify-center">
                <img
                  src="https://i.redd.it/9yf0l6nmeot41.png"
                  alt="Kakifly"
                  className="h-32 rounded-md"
                />
                <div className="text-center">
                  <div>Kakifly Sensei</div>
                </div>
              </div>
              <div className="w-1/2 border-l-2 pl-2">
                Kakifly (かきふらい, Kakifurai, born in Kyoto) is a Japanese
                manga artist. He is known for creating the series K-On! which
                was also adapted as an anime by Kyoto Animation.
              </div>
            </div>
            <div className="w-full border-2"></div>
            <div className=" m-2 flex gap-1">
              <div className="shrink-0  w-1/2 flex flex-col items-center justify-center">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNl6a2_UXtDfM1YwueHQt_UeGrw9fBI4ImtK0mCBCbvnRcSuq4WqxPNDU5Zh-mZS0CAi0&usqp=CAU"
                  alt="Kakifly"
                  className="h-32"
                />
              </div>
              <div className=" border-l-2 pl-2">
                Kyoto Animation Co., Ltd. (Japanese: 株式会社京都アニメーション,
                Hepburn: Kabushiki-gaisha Kyōto Animēshon), often abbreviated
                KyoAni (京アニ, Kyōani), is a Japanese animation studio and
                light novel publisher located in Uji, Kyoto Prefecture. It was
                founded in 1985 by husband and wife Hideaki and Yoko Hatta, who
                remain its president and vice-president respectively.
              </div>
            </div>
            <div className="w-full border-2"></div>
          </div>
          <div className="text-lg">Voice Actress</div>
          <div className=" bg-slate-200 rounded-xl p-2 flex justify-center gap-4 text-center flex-col sm:flex-row">
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://image.tmdb.org/t/p/original/gsYMc4nD7LFXW2jbBlIdvTauc6z.jpg"
                alt=""
                className="h-28 w-20 rounded-md"
              />
              <div className="mt-1">Toyosaki, Aki</div>
              <div
                className="
            -my-2"
              >
                as Hirasawa, Yui
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://i.namu.wiki/i/PW0-lNY4JNvxgYhqOerEGwg5BY5_8JwE9VwKUC9qFYDT42WhCwc4_i6qIS_ZLwHik3KR1ccEA7Jh-2dHz9fhqw.webp"
                alt=""
                className="h-28 w-20 rounded-md"
              />
              <div className="mt-1">Hikasa, Youko</div>
              <div
                className="
            -my-2"
              >
                as Akiyama, Mio
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvCMFhfa4m4WGFic6Q-2tnBO0ARgT-hkQDyA&s"
                alt=""
                className="h-28 w-20 rounded-md"
              />
              <div className="mt-1">Kotobuki, Minako</div>
              <div
                className="
            -my-2"
              >
                as Kotobuki, Tsumugi
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://otakotaku.com/asset/img/people/2024/04/satomi-satou-660a852530e03p.jpg"
                alt=""
                className="h-28 w-20 rounded-md"
              />
              <div className="mt-1">Satou, Satomi</div>
              <div
                className="
            -my-2"
              >
                as Tainaka, Ritsu
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSezu-n0spPFb1xlzWyYuIE_KdgRJahNES-MA&s"
                alt=""
                className="h-28 w-20 rounded-md"
              />
              <div className="mt-1">Taketatsu, Ayana</div>
              <div
                className="
            -my-2"
              >
                as Nakano, Azusa
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Credits;
