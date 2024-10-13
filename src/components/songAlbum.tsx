import React from "react";

interface ButtonProps {
  text: string;
  year: string;
  image: string;
  type: string;
}

const SongAlbum: React.FC<ButtonProps> = ({ text, year, image, type }) => {
  return (
    <button className="hover:scale-105 sm:w-40 w-24 transition-all duration-300 bg-slate-100 p-2 rounded-lg hover:bg-slate-200 shrink-0">
      <span className="text-xs flex justify-between px-2">
        <div>{type}</div>
        <div>{year}</div>
      </span>
      <img src={image} alt="album image" className="sm:w-36 sm:h-36 w-20 h-20 rounded-xl" />
      <span>{text}</span>
    </button>
  );
};

export default SongAlbum;
