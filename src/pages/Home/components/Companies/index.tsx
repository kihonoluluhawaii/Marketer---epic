import styled from '@emotion/styled';
import ImageResource from '../../../../components/ImageResouce/ImageResource.tsx';

const Companies = () => {
    return (
        <Container>
            <PartnersLogoImage
                name="partner1"
                alt="partner1 image"
                height={28}
            />
            <PartnersLogoImage
                name="partner2"
                alt="partner2 image"
                height={28}
            />
            <PartnersLogoImage
                name="partner3"
                alt="partner3 image"
                height={28}
            />
            <PartnersLogoImage
                name="partner4"
                alt="partner4 image"
                height={28}
            />
            <PartnersLogoImage
                name="partner5"
                alt="partner5 image"
                height={28}
            />
        </Container>
    );
};

export default Companies;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 30px;
    background-color: rgb(246, 247, 248);
    font-size: 40px;
    gap: 30px;
`;

const PartnersLogoImage = styled(ImageResource)`
    opacity: 0.5;
    transition: opacity 0.4s ease;
    &:hover {
        opacity: 1;
    }
`;
