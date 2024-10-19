import Footer from "../../layouts/footer";
import Header from "../../layouts/header";
import Sidebar from "../../layouts/sidebar";

function Concert() {
  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex gap-4 flex-grow p-2">
          <div className="">
            <iframe
              src="https://www.youtube.com/embed/7fwAWsQFsfE?si=y00qjNg-_I2Ve33M"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl w-full h-80"
            ></iframe>
            <div className="font-bold text-xl p-2">
              けいおん! Live Concert - Come With Me!! Disc 1 Subtitle English
            </div>
            <div className="border-t-2 p-2 text-justify">
              &nbsp;&nbsp;&nbsp;K-ON! Live Concert: Come With Me!! was a live
              concert held in Saitama Super Arena on February 20, 2011. A
              concert dedicated to all the K-ON! fans from each of the seiyuu of
              the characters. There were a total of 9 seiyuu attending the
              event: Aki Toyosaki (Yui's seiyuu), Yōko Hikasa (Mio's seiyuu),
              Satomi Satō (Ritsu's seiyuu), Minako Kotobuki (Tsumugi's seiyuu),
              Ayana Taketatsu (Azusa's seiyuu), Asami Sanada (Ms. Sawako's
              seiyuu), Madoka Yonezawa (Ui's seiyuu), Chika Fujitō (Nodoka's
              seiyuu) and Yoriko Nagata (Jun's seiyuu). <br /> <br />{" "}
              
            </div>
          </div>
          <div className="font-bold text-xl p-16 text-center hidden sm:flex">
            "This concert had been attended by more than 35
              thousand fans and CDs, DVDs and Blu-Ray copies were sold
              throughout Japan. They revealed about the movie release date on
              2011.12.03."
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Concert;
