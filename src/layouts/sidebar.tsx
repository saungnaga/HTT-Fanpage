import ui1 from "../assets/ui1.png";
import ui2 from "../assets/ui2.png";
import jun1 from "../assets/jun1.png";
import jun2 from "../assets/jun2.png";
import nodoka1 from "../assets/nodoka1.png";
import nodoka2 from "../assets/nodoka2.png";
import sawako1 from "../assets/sawako1.png";
import sawako2 from "../assets/sawako2.png";
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
import Button from "../components/button";
import tonchan from "../assets/tonchan.png";

function Sidebar() {
  return (
    <nav className="mt-2 flex flex-col gap-6 px-auto">
      <div className="flex flex-col gap-6 sm:w-28 sm:hidden items-center">
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
            text="Shop"
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
      </div>
      <div className="flex flex-col gap-6 sm:w-28 rounded-xl items-center sm:items-start">
          <a href="/votes">
            <Button
              text="Votes"
              defaultImage={nodoka1}
              hoverImage={nodoka2}
              variant={"nodoka"}
              size={"medium"}
            />
          </a>
          <a href="/memes">
            <Button
              text="Memes"
              defaultImage={jun1}
              hoverImage={jun2}
              variant={"jun"}
              size={"medium"}
            />
          </a>
          <a href="/support">
            <Button
              text="Support"
              variant={"ui"}
              size={"medium"}
              defaultImage={ui1}
              hoverImage={ui2}
            />
          </a>
          <a href="/credits">
            <Button
              text="Credits"
              variant={"sawako"}
              defaultImage={sawako1}
              hoverImage={sawako2}
              size={"medium"}
            />
          </a>
      </div>
      <div className="mx-auto">
          <a href="/games">
            <button className="border-t-2  hover:scale-110 w-16 sm:w-auto">
              <img src={tonchan} alt="" className="w-16" />
              <div className="-mt-6">
                Games
              </div>
            </button>
          </a>
      </div>
    </nav>
  );
}

export default Sidebar;
