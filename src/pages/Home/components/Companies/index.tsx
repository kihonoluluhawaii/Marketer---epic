import styled from '@emotion/styled';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';

const partnerList: Array<{ name: ImageName; alt: string }> = [
    { name: 'partner1', alt: 'partner1 image' },
    { name: 'partner2', alt: 'partner2 image' },
    { name: 'partner3', alt: 'partner3 image' },
    { name: 'partner4', alt: 'partner4 image' },
    { name: 'partner5', alt: 'partner5 image' },
];

const Companies = () => {
    return (
        <Container>
            {partnerList.map((item) => (
                <PartnersLogoImage
                    key={item.name}
                    name={item.name}
                    alt={item.alt}
                    height={28}
                />
            ))}
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
