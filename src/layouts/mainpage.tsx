import htt from "../assets/htt.png";

function Main() {
  return (
    <div>
      <div className="container flex-1 border-2 rounded-3xl bg-[url('https://img.freepik.com/free-photo/white-paper-texture-background_23-2151025746.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725494400&semt=ais_hybrid')] bg-cover flex flex-col justify-center items-center md:flex-row">
        <div className="w-full md:w-1/3 p-4 flex flex-col justify-center md:pl-12 z-10">
          <div className="font-bold text-3xl text-center">Yahooo!!!</div>
          <div className="text-center text-md mt-2">
            We are . . . Houkago Tea Taimu desu! Sakuragaoka high-school keionbu
            or you can say it's a light music club. Here are some of our stories
            that we'll never forget, and I hope you so . . <br />
            Minnaa . . daisuki dayo!!
          </div>
        </div>
        <div className="w-full md:w-2/3 flex justify-center p-4 -mt-20 md:my-0 md:-ml-20">
          <img
            src={htt}
            alt="htt"
            className="opacity-80 w-full max-w-[360px] h-auto"
            style={{ maxHeight: "480px" }}
          />
        </div>
      </div>
      <div className="border-t-2 mt-4 p-2">
        Houkago Tea Time (放課後ティータイム), often abbreviated as HTT, is the
        main band in the K-ON! series. The name translates into English as
        After-School Tea Time.
      </div>
      <div className="border-t-2 p-2">
        <div className="text-xl font-bold">History</div>
        <div className="p-2">
          &nbsp;&nbsp;&nbsp;The five Sakuragaoka High School students Yui
          Hirasawa, Mio Akiyama, Ritsu Tainaka, Tsumugi Kotobuki and Azusa
          Nakano had already been members of their school's Light Music Club for
          a reasonably long time when the first questions about forming an
          independent band appeared. The idea was to gather together to play
          music while out of school. The only real problem was to find a name
          for the band. After endless and fruitless discussion, the club's
          adviser Sawako Yamanaka, irritated, gave the band its current name,
          Ho-kago Tea Time, which is an allusion to the main activities in the
          Light Music Club - gathering together to drink tea after school has
          ended. The members, although disappointed about not being able to
          decide the name on their own, accepted it willingly. For the next
          several concerts, rather than performing as the Light Music Club, they
          referred to themselves as Ho-kago Tea Time. Together, they experienced
          many events like visiting the "Natsu Rock Fest", performing alongside
          the band Death Devil or even in London at a "Japanese Culture
          Festival". As the third year of the four seniors came to an end
          however, the band had to split. While Azusa stayed behind to form her
          own band, Wakaba Girls, out of the new cast of the Light Music Club,
          the four seniors Yui, Mio, Ritsu and Tsumugi started to attend the J.
          Women's university where they continued Ho-kago Tea Time without
          Azusa. Eventually, the band joined the university's Light Music Club
          where they started a friendly rivalry with the band Onna Gumi.
        </div>
      </div>
      <div className="border-t-2 p-2">
        <div className="text-xl font-bold">Profile</div>
        <div className="p-2">
          <div className="underline">Line-Up:</div>
          <ul className="list-disc pl-4 pt-1">
            <li>
              Yui Hirasawa - Lead Guitar, Rhythm Guitar, Lead Vocals, Backing
              Vocals
            </li>
            <li>Mio Akiyama - Bass, Lead Vocals, Backing Vocals</li>
            <li>Ritsu Tainaka - Drums, Backing Vocals</li>
            <li>
              Tsumugi Kotobuki - Keyboard, Backing Vocals, Lead Vocals (one
              song)
            </li>
            <li>
              Azusa Nakano - Rhythm Guitar, Backing Vocals, Lead Guitar, Lead
              Vocals (alongside Yui, one show)
            </li>
            <li>Sawako Yamanaka - Rhythm Guitar (guest, one show) </li>
          </ul>{" "}
          <div className="mt-2">
            &nbsp;&nbsp;&nbsp;Aside from the task of playing an instrument , Mio and Tsumugi both
            have organizational roles in the band as well. Mio is the band's lyric
            writer and Tsumugi is the musical composer. After the oldest four
            members of the band graduated, HTT returned to the four member line-up
            it originally had during the first year at the Light Music Club.
          </div>
        </div>
      </div>
      <div className="border-t-2 p-2 font-bold">
      Explore this platform to find out more about them!
      </div>
    </div>
  );
}

export default Main;
