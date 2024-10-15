import React, { useState } from "react";
import ChordModal from "../components/chordModal"; // Chord modal component
import chords from "../components/chords"; // Import the chords array
import Header from "../layouts/header";
import Sidebar from "../layouts/sidebar";
import Footer from "../layouts/footer";

const Chords: React.FC = () => {
  const [transposeValue, setTransposeValue] = useState<number>(0);
  const [isScrolling, setIsScrolling] = useState<boolean>(false);
  const [selectedChord, setSelectedChord] = useState<string | null>(null);
  const [autoscrollInterval, setAutoscrollInterval] =
    useState<NodeJS.Timeout | null>(null);

  const song = `
    (Verse)
    [D]Kimi wo miteru [G]to itsumo haato [D]dokidoki[A]
    [B]Yureru omoi wa [G]mashumaro mitai ni [A]fuwafuwa
    Itsumo [G]ganbaru (itsumo ganbaru)
    Kimi no [D]yokogao (kimi no yokogao)
    Zutto [E]mitete mo [A]kizukanai [D]yo ne [D]
    Yume no [G] naka nara (yume no naka nara)
    Futari no [D]kyori[B]
    [E]Chijimerareru[E] no ni [A]na

    (Chorus)
    [B]Aa [A]aa [D]kamisama [G]onegai futari[A] dake no[F#]
    Doriimu[B] [G]Taimu [E]kudasai[A]
    [B]O--ki[A] [D]ni iri no [G]usachan daite[A] [F#]
    Konya[B] mo [G]oyasumi[A]

    [D] [G][A]Fuwafuwa [D]Time (Fuwafuwa [G]Time)
    [A]Fuwafuwa [D]Time (Fuwafuwa [G]Time)
    [A]Fuwafuwa [D]Time (Fuwafuwa [G]Time)[A]
  `;

  // Transpose function
  const transposeChords = (direction: number) => {
    setTransposeValue((prevValue) => prevValue + direction);
  };

  // Function to transpose individual chords
  const transposeChord = (chord: string): string => {
    const index = chords.indexOf(chord);
    if (index === -1) return chord;
    const newIndex = (index + transposeValue + chords.length) % chords.length;
    return chords[newIndex];
  };

  // Convert song string to JSX with clickable chords
  const renderSong = (lyrics: string) => {
    return lyrics.split("\n").map((line, i) => (
      <p key={i}>
        {line.split(/\[([A-G][#mbdim]*)\]/g).map((part, j) =>
          chords.includes(part) ? (
            <span
              key={j}
              className="text-blue-500 cursor-pointer"
              onClick={() => setSelectedChord(part)}
            >
              [{transposeChord(part)}]
            </span>
          ) : (
            part
          )
        )}
      </p>
    ));
  };

  // Autoscroll function
  const toggleAutoscroll = () => {
    if (autoscrollInterval) {
      clearInterval(autoscrollInterval);
      setAutoscrollInterval(null);
      setIsScrolling(false);
    } else {
      setAutoscrollInterval(setInterval(() => window.scrollBy(0, 1), 100));
      setIsScrolling(true);
    }
  };

  return (
    <div className="lg:w-4/5 mx-auto">
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="container flex-grow p-20 bg-slate-100 rounded-xl">
          <h1 className="text-2xl font-bold text-center mb-4">
            Fuwa Fuwa Time
          </h1>
          {/* Transpose and Autoscroll Controls */}
          <div className="flex justify-center gap-4 mb-6">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => transposeChords(1)}
            >
              Transpose Up
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => transposeChords(-1)}
            >
              Transpose Down
            </button>
            <button
              className={`${
                isScrolling ? "bg-red-500" : "bg-green-500"
              } text-white px-4 py-2 rounded hover:bg-opacity-80`}
              onClick={toggleAutoscroll}
            >
              {isScrolling ? "Stop Autoscroll" : "Start Autoscroll"}
            </button>
          </div>
          {/* Render Song */}
          <div className="whitespace-pre-wrap font-mono flex flex-col">
            {renderSong(song)}
          </div>
          {/* Chord Modal */}
          {selectedChord && (
            <ChordModal
              chord={selectedChord}
              onClose={() => setSelectedChord(null)}
            />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Chords;
