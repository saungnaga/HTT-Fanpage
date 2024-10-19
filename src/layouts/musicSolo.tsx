import SongAlbum from "../components/songAlbum";
import yui1 from "../assets/yuiAlbum1.jpg";
import yui2 from "../assets/yuiAlbum2.jpg";
import mio1 from "../assets/mioAlbum1.jpg";
import mio2 from "../assets/mioAlbum2.jpg";

function MusicSolo() {
  return (
    <div id="solo" className="p-2 grid sm:grid-cols-auto-fill-album grid-cols-auto-fill-albumSmall gap-4 items-start">
      <a href="">
        <SongAlbum
          image={yui1}
          text="Image Song Yui Hirasawa"
          type="EP"
          year="2009"
        />
      </a>
      <a href="">
        <SongAlbum
          image={yui2}
          text="Image Song Yui Hirasawa Vol.II"
          type="EP"
          year="2010"
        />
      </a>
      <a href="">
        <SongAlbum
          image={mio2}
          text="Image Song Mio Akiyama"
          type="EP"
          year="2009"
        />
      </a>
      <a href="">
        <SongAlbum
          image={mio1}
          text="Image Song Mio Akiyama Vol.II"
          type="EP"
          year="2010"
        />
      </a>
    </div>
  );
}

export default MusicSolo;
