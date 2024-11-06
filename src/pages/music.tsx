import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";
import MusicHtt from "../layouts/musicHtt";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import MusicSolo from "../layouts/musicSolo";
import MusicDD from "../layouts/musicDD";

function Music() {
  type ExpandedSections = {
    htt: boolean;
    solo: boolean;
    devil: boolean;
    [key: string]: boolean; // Allow any additional string keys
  };

  const [isExpanded, setIsExpanded] = React.useState<ExpandedSections>({
    htt: false,
    solo: true,
    devil: false,
  });

  const expandedSection = (section: string) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex ">
        <Sidebar />
        <div className="flex flex-col md:flex-row min-h-screen w-full gap-2">
          <div className="container  mr-1 sm:p-4">
            <div>
              <button
                className="bg-slate-400 bg-opacity-30 rounded-2xl px-2 w-full text-left hover:bg-opacity-50 flex justify-between mb-1"
                onClick={() => expandedSection("htt")}
              >
                <div>Houkago Tea Time</div>
                <div className="opacity-50">
                  {isExpanded.htt ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>
              {isExpanded.htt && <MusicHtt />}
            </div>
            <a href="#solo">
              <button
                className="bg-slate-400 bg-opacity-30 rounded-2xl px-2 w-full text-left hover:bg-opacity-50 flex justify-between mb-1"
                onClick={() => expandedSection("solo")}
              >
                <div>Solo Album</div>
                <div className="opacity-50">
                  {isExpanded.solo ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>
              {isExpanded.solo && <MusicSolo />}
            </a>
            <a href="#DD">
              <button
                className="bg-slate-400 bg-opacity-30 rounded-2xl px-2 w-full text-left hover:bg-opacity-50 flex justify-between mb-1"
                onClick={() => expandedSection("devil")}
              >
                <div>Death Devil</div>
                <div className="opacity-50">
                  {isExpanded.devil ? <ChevronUp /> : <ChevronDown />}
                </div>
              </button>
              {isExpanded.devil && <MusicDD />}
            </a>
          </div>
          <iframe className="rounded-xl min-h-screen" src="https://open.spotify.com/embed/playlist/5mQ0cB6LVKnPOQIGVC6BAT?utm_source=generator" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Music;
