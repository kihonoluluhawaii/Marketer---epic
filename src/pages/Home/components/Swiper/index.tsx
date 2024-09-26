import Logo1 from '/images/rs1.png';
import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';

const SwiperTemp = () => {
    return (
        <SwiperContainer>
            <SwiperSlide>
                <TextContent>
                    <h2>Social Media Promotion</h2>
                    <p>
                        Our team of digital marketing consultants create custom
                        <br />
                        solutions for your internet marketing needs including
                        <br />
                        outreach, social media and content services.
                    </p>
                    <button>READ MORE</button>
                </TextContent>
                <ImageContent>
                    <StyledImage src={Logo1} alt="swiper logo image" />
                </ImageContent>
            </SwiperSlide>
        </SwiperContainer>
    );
};

export default SwiperTemp;

const SwiperContainer = styled(Swiper)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 500px;
    margin: 0 auto;
    background-color: rgb(52, 152, 219);
`;

const SwiperSlide = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    color: white;
`;

const TextContent = styled.div`
    flex: 1;
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
    flex: 1;
    height: 100%;
`;

const StyledImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;
