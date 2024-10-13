import Footer from "../layouts/footer";
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";
import MusicHtt from "../layouts/musicHtt";
import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function Music() {
  type ExpandedSections = {
    htt: boolean;
    solo: boolean;
    devil: boolean;
    [key: string]: boolean; // Allow any additional string keys
  };

  const [isExpanded, setIsExpanded] = React.useState<ExpandedSections>({
    htt: true,
    solo: false,
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
        <div className="container flex-grow mr-1 min-h-screen sm:p-4">
          <div>
            <button
              className="bg-slate-400 bg-opacity-30 rounded-2xl px-2 w-full text-left hover:bg-opacity-50 flex justify-between"
              onClick={() => expandedSection("htt")}
            >
              <div>Houkago Tea Time</div>
              <div className="opacity-50">
                {isExpanded.htt ? <ChevronUp /> : <ChevronDown />}
              </div>
            </button>
            {isExpanded.htt && <MusicHtt />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Music;
