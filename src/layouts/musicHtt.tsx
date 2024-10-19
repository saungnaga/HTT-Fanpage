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
import UI from "../assets/u&i.jpg";
import Coming from "../components/comingSoonStamp";

function MusicHtt() {
  return (
    <div id="" className="p-2 grid sm:grid-cols-auto-fill-album grid-cols-auto-fill-albumSmall gap-4 items-start">
      <div className="flex justify-center items-center">
        <SongAlbum
          text="Houkago Tea Time"
          year="2009"
          image={album}
          type="album"
        />
        <Coming />
      </div>
      <a href="/music/htt2">
        <SongAlbum
          text="Houkago Tea Time II"
          year="2010"
          image={album1}
          type="album"
        />
      </a>
      <div className="flex justify-center items-center">
        <SongAlbum
          text="Houkago Tea Time in Movie"
          year="2012"
          type="album"
          image={movie}
        />
        <Coming />
      </div>
      <div className="flex justify-center items-center">
        <SongAlbum
          text="Cagayake! Girls"
          year="2009"
          type="single"
          image={cagayake}
        />
        <Coming />
      </div>
      <div className="flex justify-center items-center">
        <SongAlbum
          text={'Don\'t Say "Lazy"'}
          year="2009"
          type="single"
          image={lazy}
        />
        <Coming />
      </div>
      <div className="flex justify-center items-center">
        <SongAlbum
          text="Go! Go! Maniac"
          year="2010"
          type="single"
          image={maniac}
        />
        <Coming />
      </div>
      <div className="flex justify-center items-center">
        <SongAlbum text="Listen!!" year="2010" type="single" image={listen} />
        <Coming />
      </div>
      <div className="flex justify-center items-center">
        <SongAlbum
          text="Utauyo!! Miracle"
          year="2010"
          type="single"
          image={utauyo}
        />
        <Coming />
      </div>
      <div className="flex justify-center items-center">
        <SongAlbum
          text="No, Thank You!"
          year="2010"
          type="single"
          image={thank}
        />
        <Coming />
      </div>
      <div className="flex justify-center items-center">
        <SongAlbum
          text="Gohan wa Okazu / U & I"
          year="2010"
          type="EP"
          image={UI}
        />
        <Coming />
      </div>
    </div>
  );
}

export default MusicHtt;
