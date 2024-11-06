import React from "react";

interface CollageProps {
  images: string[];
}

const Collage: React.FC<CollageProps> = ({ images }) => {
  return (
    <div className="flex-grow grid grid-cols-auto-fill-album gap-2 p-4">
      {images.map((image, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-lg ${
            index === 0
              ? "sm:col-span-2 sm:row-span-2 col-span-2 row-span-2"
              : ""
          }`}
        >
          <img
            src={image}
            alt={`collage ${index}`}
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
      ))}
    </div>
  );
};

export default Collage;
