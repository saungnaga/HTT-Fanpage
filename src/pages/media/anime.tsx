import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";

function Anime() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex gap-4 flex-grow p-2">
          <div className="">
            <iframe
              src="https://www.youtube.com/embed/THOEh1Qvcrk"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl w-full h-80"
            ></iframe>
            <div className="font-bold text-xl p-2">
              K-ON!: The Movie (Subtitle Indonesia)
            </div>
            <div className="border-t-2 p-2 text-justify">
              &nbsp;&nbsp;&nbsp;Graduation looms for the founding members of the
              Light Music Club. With only a few precious weeks of school left,
              the girls decide to make the most of it and plan a trip abroad.
              Hawaii, New York, Dubai—many destinations are suggested, but after
              a little help from the club's precious pet turtle, Ton-chan,
              London is chosen as the host of their next misadventure! Yui
              Hirasawa, Mio Akiyama, Tsumugi Kotobuki, Ritsu Tainaka, and Azusa
              Nakano will visit famous landmarks, perform live music for
              Londoners, and eat all sorts of delicious food, all while
              stumbling clumsily from place to place. But the fun won't last
              forever, as heartfelt songs and goodbyes will be made as their
              high school days together come to a close. One thing is for
              certain though: the undeniable friendships these girls have formed
              is something that will carry on long after the final scene rolls.
            </div>
          </div>
          <div className="font-bold text-xl p-16 text-center hidden sm:flex">
            "This movie won the Feature Film Award in the 17th Animation Kobe
            Awards in 2012 and the 2012 Newtype Anime Awards for Best Anime
            Film."
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Anime;
