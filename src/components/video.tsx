import Movie from "../assets/Movie.mp4";
import movie from "../assets/movie.jpg";

function Video() {
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/THOEh1Qvcrk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>K-ON! The Movie</p>
    </div>
  );
}

export default Video;
