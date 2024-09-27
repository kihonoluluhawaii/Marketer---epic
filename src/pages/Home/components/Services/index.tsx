/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';
import SectionHeader from '../SectionHeader.tsx';
import ServiceIntroduction from './ServiceIntroduction.tsx';

const serviceData: Array<{
    name: ImageName;
    alt: string;
    title: string;
    description: string;
}> = [
    {
        name: 'service1',
        alt: 'service1 image',
        title: 'Fully Customizable',
        description:
            'Curabitur quam etsum lacus etsumis nulat\niaculis ets vitae etsum nisle varius sed aliquam\nets vitae dictis netsum.',
    },
    {
        name: 'service2',
        alt: 'service2 image',
        title: 'Fully Customizable',
        description:
            'Curabitur quam etsum lacus etsumis nulat\niaculis ets vitae etsum nisle varius sed aliquam\nets vitae dictis netsum.',
    },
    {
        name: 'service3',
        alt: 'service3 image',
        title: 'Fully Customizable',
        description:
            'Curabitur quam etsum lacus etsumis nulat\niaculis ets vitae etsum nisle varius sed aliquam\nets vitae dictis netsum.',
    },
];
const ServiceSection = () => {
    return (
        <Container>
            <SectionHeader
                title="Amazing Features"
                subtitle={`There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration, by injected humour, or new randomised words.`}
                subTitleColor="7c8595"
            />

            <ServiceLists>
                {serviceData.map((item, index) => (
                    <Service key={index}>
                        <ImageStyled
                            name={item.name}
                            alt={item.alt}
                            width={120}
                        />
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </Service>
                ))}
            </ServiceLists>
            <ServiceIntroduction />
        </Container>
    );
};

export default ServiceSection;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 90px 0 50px;
    color: #7c8595;
    border-top: 1px solid rgb(234, 234, 234);
`;

const ServiceLists = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-align: center;

    h3 {
        margin: 20px 0 10px;
        font-size: 20px;
        color: #2f362f;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        white-space: pre-line;
    }
`;

const Service = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    padding: 0 30px;
`;

const ImageStyled = styled(ImageResource)`
    border-radius: 50%;
`;
