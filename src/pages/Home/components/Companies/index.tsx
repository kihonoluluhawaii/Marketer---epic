/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import partner1Img from '/images/partner1.png';
import partner2Img from '/images/partner2.png';
import partner3Img from '/images/partner3.png';
import partner4Img from '/images/partner4.png';
import partner5Img from '/images/partner5.png';

const images = [
    { src: partner1Img, alt: 'partner 1' },
    { src: partner2Img, alt: 'partner 2' },
    { src: partner3Img, alt: 'partner 3' },
    { src: partner4Img, alt: 'partner 4' },
    { src: partner5Img, alt: 'partner 5' },
];
const Companies = () => {
    return (
        <div
            css={css`
                width: 100%;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                padding: 30px;
                background-color: rgb(246, 247, 248);
                font-size: 40px;
                gap: 30px;
            `}
        >
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    css={css`
                        height: 28px;
                        opacity: 0.5;
                        transition: opacity 0.4s ease;
                        &:hover {
                            opacity: 1;
                        }
                    `}
                />
            ))}
        </div>
    );
};

export default Companies;
