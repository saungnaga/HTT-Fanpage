import yuiPeace from "../assets/yuiPeace.png";

function ComingSoon() {
  return (
    <div className="min-h-screen text-5xl flex flex-col items-center justify-center shrink w-full pb-28 text-center">
      <img className="w-32 mb-28 animate-bounce" src={yuiPeace} alt="" />
      <div className="font-extrabold absolute">COMING SOON</div>
    </div>
  );
}

export default ComingSoon;
