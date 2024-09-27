import React from 'react';

const imageList = {
    service1: '/images/services1.jpg',
    service2: '/images/services2.jpg',
    service3: '/images/services3.jpg',
    partner1: '/images/partner1.png',
    partner2: '/images/partner2.png',
    partner3: '/images/partner3.png',
    partner4: '/images/partner4.png',
    partner5: '/images/partner5.png',
    logo1: '/images/rs1.png',
    logo2: '/images/rs2.png',
    logo3: '/images/rs3.png',
    portfolio1: '/images/portfolio1.jpg',
    portfolio2: '/images/portfolio2.jpg',
    portfolio3: '/images/portfolio3.jpg',
    portfolio4: '/images/portfolio4.jpg',
    portfolio5: '/images/portfolio5.jpg',
    portfolio6: '/images/portfolio6.jpg',
} as const;

export type ImageName = keyof typeof imageList;

type Props = {
    name: ImageName;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
};

const ImageResource: React.FC<Props> = ({
    name,
    alt,
    width,
    height,
    className,
}) => {
    const src = imageList[name];

    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    );
};

export default ImageResource;
