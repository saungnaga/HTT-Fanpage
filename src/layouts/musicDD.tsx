import SongAlbum from "../components/songAlbum";
import dd1 from "../assets/deathDevil1.jpg";
import dd2 from "../assets/deathDevil2.jpg";

function MusicDD() {
  return (
    <div id="DD" className="p-2 grid sm:grid-cols-auto-fill-album grid-cols-auto-fill-albumSmall gap-4 items-start">
      <a href="">
        <SongAlbum image={dd1} text="Love" type="Single" year="2010" />
      </a>
      <a href="">
        <SongAlbum image={dd2} text="Maddy Candy" type="Single" year="2010" />
      </a>
    </div>
  );
}

export default MusicDD;
