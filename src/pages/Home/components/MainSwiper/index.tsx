import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';
import { useEffect, useRef } from 'react';

const swiperData: Array<{
    title: string;
    content: string;
    image: ImageName;
    bgColor: string;
}> = [
    {
        title: ' Social Media Promotion',
        content:
            'Our team of digital marketing consultants create custom\n solutions for your internet marketing needs including\n outreach, social media and content services.',
        image: 'logo1',
        bgColor: 'rgb(52, 152, 219)',
    },
    {
        title: ' Social Media Promotion',
        content:
            'Our team of digital marketing consultants create custom\n solutions for your internet marketing needs including\n outreach, social media and content services.',
        image: 'logo2',
        bgColor: 'rgb(66,147,86)',
    },
    {
        title: ' Social Media Promotion',
        content:
            'Our team of digital marketing consultants create custom\n solutions for your internet marketing needs including\n outreach, social media and content services.',
        image: 'logo3',
        bgColor: 'rgb(44,45,56)',
    },
];

const MainSwiper = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.backgroundColor = swiperData[0].bgColor;
        }
    });
    return (
        <Container ref={containerRef}>
            <StyledSwiper
                direction={'vertical'}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                allowTouchMove={true}
                onSlideChange={(swiper) => {
                    if (containerRef.current) {
                        containerRef.current.style.backgroundColor =
                            swiperData[swiper.activeIndex].bgColor;
                    }
                }}
            >
                {swiperData.map((item, index) => (
                    <StyledSwiperSlide key={index}>
                        <TextContent>
                            <h2>{item.title}</h2>
                            <p>{item.content}</p>
                            <button>READ MORE</button>
                        </TextContent>
                        <ImageContent>
                            <StyledImage
                                name={item.image}
                                alt={`${item.title} image`}
                            />
                        </ImageContent>
                    </StyledSwiperSlide>
                ))}
            </StyledSwiper>
        </Container>
    );
};

export default MainSwiper;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    background-color: ${swiperData[0].bgColor};
`;

const StyledSwiper = styled(Swiper)`
    margin: 0 auto;
    width: 100%;
    max-width: 1140px;
    height: 100%;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TextContent = styled.div`
    width: 550px;
    padding-right: 30px;
    color: rgb(255, 255, 255);

    text-align: left;

    h2 {
        margin-bottom: 20px;
        font-size: 38px;
        font-weight: 500;
    }

    p {
        margin-bottom: 30px;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
    }

    button {
        padding: 16px 36px;
        font-size: 13px;
        font-weight: 700;
        color: rgb(255, 255, 255);
        border: 2px solid rgb(255, 255, 255);
        border-radius: 5px;
        background-color: inherit;
    }
`;

const ImageContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const StyledImage = styled(ImageResource)`
    max-width: 550px;
    height: 100%;
    object-fit: contain;
`;
