import React from "react"

interface ButtonProps {
    title: string;
    image: string;
    description: string;
    link: string;
}

const Playlist: React.FC<ButtonProps> = ({ title, image, description, link }) => {

    return (
        <div className="flex p-4 gap-4">
            <div className="flex flex-col items-center border-2 rounded-xl p-4">
                <div className="text-xl font-bold border-b-2 border-black px-4">{title}</div>
                <img src={image} alt="album cover" className="w-40 h-40 rounded-xl m-4" />
                <div className="text-center">{description}</div>
            </div>
            <iframe
                className="rounded-xl w-full min-h-screen"
                src={link}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                />
        </div>
    )
}

export default Playlist