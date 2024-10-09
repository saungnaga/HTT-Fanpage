

function Video() {
  return (
    <div>
      <iframe
        src="https://www.youtube.com/embed/THOEh1Qvcrk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <p>K-ON! The Movie</p>
    </div>
  );
}

export default Video;
