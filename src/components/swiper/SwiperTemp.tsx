import {
    ImageContent,
    StyledImage,
    SwiperContainer,
    SwiperSlide,
    TextContent,
} from './SwiperSectionStyles.tsx';

import Logo1 from '../../../public/images/rs1.png';

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
