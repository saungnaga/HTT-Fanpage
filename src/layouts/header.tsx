import logo from "../assets/logo.png";
import Button from "../components/button";
import yui1 from "../assets/yui1.png";
import yui2 from "../assets/yui2.png";
import mio1 from "../assets/mio1.png";
import mio2 from "../assets/mio2.png";
import ritsu1 from "../assets/ritsu1.png";
import ritsu2 from "../assets/ritsu2.png";
import mugi1 from "../assets/mugi1.png";
import mugi2 from "../assets/mugi2.png";
import azusa1 from "../assets/azusa1.png";
import azusa2 from "../assets/azusa2.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-20 flex bg-white items-center gap-2 justify-between p-2">
      <div className="flex items-center gap-5 ml-2">
        <button>
          <img
            src={logo}
            alt=""
            className="sm:h-16 h-10 px-3 hover:rounded-full hover:shadow-red-400 hover:shadow-sm hover:bg-black hover:translate-x-1 transition-all duration-300"
          />
        </button>
        <div className="sm:hidden font-bold">Houkago Tea Time</div>
        <nav className="sm:flex hidden gap-4">
          <a href="/">
            <Button
              text="Home"
              defaultImage={yui1}
              hoverImage={yui2}
              variant={"yui"}
              size={"medium"}
            />
          </a>
          <a href="/music">
            <Button
              text="Music"
              defaultImage={mio1}
              hoverImage={mio2}
              variant={"mio"}
              size={"small"}
            />
          </a>
          <a href="/media">
            <Button
              text="Media"
              defaultImage={ritsu1}
              hoverImage={ritsu2}
              variant={"ritsu"}
              size={"medium"}
            />
          </a>
          <a href="/shop">
            <Button
              text="Merch"
              defaultImage={azusa1}
              hoverImage={azusa2}
              variant={"azusa"}
              size={"medium"}
            />
          </a>
          <a href="/lounge">
            <Button
              text="Lounge"
              defaultImage={mugi1}
              hoverImage={mugi2}
              variant={"mugi"}
              size={"medium"}
            />
          </a>
        </nav>
      </div>
      <div className="md:flex flex sm:hidden items-center sm:text-md text-xs gap-2 mr-4">
        <button className="text-white bg-green-600 p-1 rounded-md font-bold sm:w-16 bg-opacity-90 hover:bg-opacity-70 hover:scale-105 ">
          Join
        </button>
        <button className="text-white bg-gray-400 p-1 rounded-md font-bold sm:w-16 hover:bg-gray-500 hover:scale-105">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
