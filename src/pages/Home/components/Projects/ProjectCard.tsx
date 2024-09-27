import React from 'react';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';

type ProjectDescProps = {
    desc: string;
    feature: string;
};
const projectList: Array<{
    name: ImageName;
    alt: string;
    desc: string;
    feature: string;
}> = [
    {
        name: 'portfolio1',
        alt: 'portfolio1 image',
        desc: 'Safe Payment Method',
        feature: 'PPC | eCommerce',
    },
    {
        name: 'portfolio2',
        alt: 'portfolio2 image',
        desc: 'Social Media Promotion',
        feature: 'SEO / Social Media',
    },
    {
        name: 'portfolio3',
        alt: 'portfolio3 image',
        desc: 'Conversion Optimisation',
        feature: 'SEO / Social Media',
    },
    {
        name: 'portfolio4',
        alt: 'portfolio4 image',
        desc: 'Content Marketing',
        feature: 'PPC | eCommerce',
    },
    {
        name: 'portfolio5',
        alt: 'portfolio5 image',
        desc: 'Social Media Promotion',
        feature: 'SEO / Social Media',
    },
    {
        name: 'portfolio6',
        alt: 'portfolio6 image',
        desc: 'Conversion Optimisation',
        feature: 'SEO / Social Media',
    },
];

const ProjectCard: React.FC = () => {
    return (
        <Container>
            <ProjectCardSwiper />
        </Container>
    );
};

export default ProjectCard;

const ProjectCardSwiper: React.FC = () => {
    return (
        <StyledSwiper
            slidesPerView={3}
            slidesPerGroup={3}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            allowTouchMove={false}
        >
            {projectList.map((item, index) => (
                <StyledSwiperSlide key={index}>
                    <ProjectImage name={item.name} alt={item.alt} />
                    <ProjectDesc desc={item.desc} feature={item.feature} />
                </StyledSwiperSlide>
            ))}
        </StyledSwiper>
    );
};

const ProjectDesc = ({ desc, feature }: ProjectDescProps) => {
    return (
        <StyledProjectDesc>
            <h2>{desc}</h2>
            <p>{feature}</p>
        </StyledProjectDesc>
    );
};

const Container = styled.div`
    width: 100%;
    max-width: 1170px;
    overflow: hidden;
`;

const StyledSwiper = styled(Swiper)`
    width: 100%;
    padding-bottom: 50px;
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ProjectImage = styled(ImageResource)`
    width: 100%;
    max-width: 350px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
`;

const StyledProjectDesc = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 1px 20px 12px;
    box-sizing: border-box;
    text-align: center;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background-color: white;

    h2 {
        margin-top: 20px;
        font-size: 18px;
        font-weight: 500;
        line-height: 20px;
        color: rgb(69, 69, 69);
        transition: color 0.4s ease;
        cursor: pointer;

        &:hover {
            color: rgb(52, 152, 219);
        }
    }

    p {
        margin-top: 10px;
        font-family: 'Open Sans', sans-serif;
        font-style: italic;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        color: rgb(124, 133, 149);
    }
`;
