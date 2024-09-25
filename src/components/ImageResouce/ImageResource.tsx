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
};

type ImageName = keyof typeof imageList;

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
