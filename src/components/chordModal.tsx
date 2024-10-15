import React from "react";

interface ChordModalProps {
  chord: string;
  onClose: () => void;
}

const ChordModal: React.FC<ChordModalProps> = ({ chord, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{chord} Chord</h2>
        <img
          src={`/chords/${chord}.png`} // Image for the chord (e.g., C.png)
          alt={`${chord} chord diagram`}
          className="mx-auto"
        />
        <button
          className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ChordModal;
