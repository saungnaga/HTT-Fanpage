import SongAlbum from "../components/songAlbum";
import album1 from "../assets/album-hokago-II.jpg";
import album from "../assets/album1.jpg";
import movie from "../assets/in Movie.jpg";
import cagayake from "../assets/cagayake.jpg";
import lazy from "../assets/don't say lazy.jpg";
import maniac from "../assets/go go maniac.jpg";
import listen from "../assets/listen.jpg";
import utauyo from "../assets/utauyo.jpg";
import thank from "../assets/no thank you.jpg";
import unmei from "../assets/unmei.jpg";
import singing from "../assets/singing.jpg";
import fuwa from "../assets/fuwa fuwa time.jpg";
import pure from "../assets/pure pure heart.jpg";
import UI from "../assets/u&i.jpg";

function MusicHtt() {
  return (
    <div>
      <div className="p-2 grid sm:grid-cols-auto-fill-album grid-cols-auto-fill-albumSmall gap-4 items-start">
        <SongAlbum
          text="Houkago Tea Time"
          year="2009"
          image={album}
          type="album"
        />
        <SongAlbum
          text="Houkago Tea Time II"
          year="2010"
          image={album1}
          type="album"
        />
        <SongAlbum
          text="Houkago Tea Time in Movie"
          year="2012"
          type="album"
          image={movie}
        />
        <SongAlbum
          text="Cagayake! Girls"
          year="2009"
          type="single"
          image={cagayake}
        />
        <SongAlbum
          text={'Don\'t Say "Lazy"'}
          year="2009"
          type="single"
          image={lazy}
        />
        <SongAlbum
          text="Go! Go! Maniac"
          year="2010"
          type="single"
          image={maniac}
        />
        <SongAlbum text="Listen!!" year="2010" type="single" image={listen} />
        <SongAlbum
          text="Utauyo!! Miracle"
          year="2010"
          type="single"
          image={utauyo}
        />
        <SongAlbum
          text="No, Thank You!"
          year="2010"
          type="single"
          image={thank}
        />
        <div className="hidden sm:flex">
          <SongAlbum
            text="Unmei♪wa♪Endless!"
            year="2011"
            type="single"
            image={unmei}
          />
        </div>
        <div className="sm:hidden">
          <SongAlbum
            text="Unmei♪wa♪ Endless!"
            year="2011"
            type="single"
            image={unmei}
          />
        </div>
        <SongAlbum text="Singing!" year="2011" type="single" image={singing} />
        <SongAlbum text="Fuwa Fuwa Time" year="2009" type="EP" image={fuwa} />
        <SongAlbum text="Pure Pure Heart" year="2010" type="EP" image={pure} />
        <SongAlbum
          text="Gohan wa Okazu / U & I"
          year="2010"
          type="EP"
          image={UI}
        />
      </div>
    </div>
  );
}

export default MusicHtt;
