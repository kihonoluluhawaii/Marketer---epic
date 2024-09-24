import { Swiper } from 'swiper/react';
import styled from '@emotion/styled';

export const SwiperContainer = styled(Swiper)`
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background-color: rgb(52, 152, 219);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SwiperSlide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    color: white;
`;

export const TextContent = styled.div`
    flex: 1;
    text-align: left;
    padding-right: 30px;
    color: rgb(255, 255, 255);

    h2 {
        font-size: 38px;
        font-weight: 500;
        margin-bottom: 20px;
    }

    p {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 30px;
        line-height: 28px;
    }

    button {
        font-size: 13px;
        font-weight: 700;
        background-color: inherit;
        border: 2px solid rgb(255, 255, 255);
        border-radius: 5px;
        color: rgb(255, 255, 255);
        padding: 16px 36px;
    }
`;

export const ImageContent = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;
