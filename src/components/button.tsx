import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonStyles = cva('relative flex items-center transition-all font-bold hover:text-white hover:border-solid hover:border-2 hover:rounded-xl px-1 duration-100', {
    variants: {
        variant: {
            yui: 'text-red-500 hover:bg-red-500',
            mio: 'hover:bg-blue-500 text-blue-500',
            ritsu: 'hover:bg-yellow-500 text-yellow-500',
            mugi: 'hover:bg-pink-500 text-pink-500',
            azusa: 'hover:bg-green-500 text-green-500',
            ui: 'hover:bg-orange-500 text-orange-500',
            jun: 'hover:bg-cyan-500 text-cyan-500',
            nodoka: 'hover:bg-lime-500 text-lime-500',
            sawako: 'hover:bg-black text-black-500'
        },
        size: {
            small: 'text-sm',
            medium: 'text-md',
            large: 'text-lg',
        },
    },
    defaultVariants: {
        variant: 'yui',
        size: 'medium',
    },
})

interface ButtonProps extends VariantProps<typeof buttonStyles> {
    text: string;
    defaultImage: string;
    hoverImage: string;
}

const Button: React.FC<ButtonProps> = ({ text, defaultImage, hoverImage, variant, size }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <button className={buttonStyles({ variant, size })} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <img src={isHovered ? hoverImage : defaultImage} alt="button icon" className="h-10 w-10 transition-opacity duration-300" />
            <span>{text}</span>
        </button>
    )
}

export default Button