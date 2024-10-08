import styled from '@emotion/styled';
import SectionHeader from '../SectionHeader.tsx';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';

const reviewList: Array<{
    text: string;
    ImageUrl: ImageName;
    name: string;
    role: string;
}> = [
    {
        text: `"Pellentesque etsum is laoret mauris, dapibis etim
                        etsum, vivamus eti nibh ligula saepe present. Quis netsi
                        etsa lorem nibh ligula et evenit praesent autim fugit
                        justo et sed tempor."`,
        ImageUrl: 'client1',
        name: 'CRISTINA RICHARDS',
        role: 'CEO - SmartDesign',
    },
    {
        text: `"Pellentesque etsum is laoret mauris, dapibis etim
                        etsum, vivamus eti nibh ligula saepe present. Quis netsi
                        etsa lorem nibh ligula et evenit praesent autim fugit
                        justo et sed tempor."`,
        ImageUrl: 'client2',
        name: 'SONG KIM',
        role: 'CEO - SmartDesign',
    },
    {
        text: `"Pellentesque etsum is laoret mauris, dapibis etim
                        etsum, vivamus eti nibh ligula saepe present. Quis netsi
                        etsa lorem nibh ligula et evenit praesent autim fugit
                        justo et sed tempor."`,
        ImageUrl: 'client3',
        name: 'CRISTIANO RONALDO',
        role: 'CEO - SmartDesign',
    },
];
const Recommend = () => {
    return (
        <Container>
            <ContentContainer>
                <SectionHeader
                    title="Happy Clients Testimonials"
                    subtitle="There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration, by injected humour, or new randomised words."
                    titleColor="#ffffff"
                    subTitleColor="#ffffff"
                />
                <RecommendCard>
                    {reviewList.map((item) => (
                        <Content key={item.name}>
                            <TextContainer>{item.text}</TextContainer>
                            <ClientContainer>
                                <ImageResource
                                    name={item.ImageUrl}
                                    alt={`${item.name} image`}
                                    width={80}
                                />
                                <ClientInfo>
                                    <p>{item.name}</p>
                                    <p>{item.role}</p>
                                </ClientInfo>
                            </ClientContainer>
                        </Content>
                    ))}
                </RecommendCard>
            </ContentContainer>
        </Container>
    );
};

export default Recommend;

const Container = styled.div`
    width: 100%;
    padding: 90px 0;
    background-color: #3498db;
`;

const ContentContainer = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`;
const RecommendCard = styled.div`
    display: flex;
    margin-top: 60px;

    @media (max-width: 990px) {
        flex-direction: column;
        gap: 30px;
    }
`;

const Content = styled.div`
    position: relative;
    padding: 0 15px;
    margin-bottom: 60px;
    box-sizing: border-box;
`;

const TextContainer = styled.div`
    position: relative;
    padding: 30px;
    margin-bottom: 20px;
    color: rgb(124, 133, 149);
    border-radius: 5px;
    font-size: 16px;
    line-height: 26px;
    background-color: #ffffff;

    &::after {
        content: '';
        position: absolute;
        bottom: -6px;
        left: 44px;
        transform: rotate(45deg);
        width: 16px;
        height: 16px;
        background-color: #ffffff;
    }
`;

const ClientContainer = styled.div`
    position: absolute;
    left: 27px;
    bottom: -80px;
    display: flex;
    align-items: center;
    gap: 16px;

    img {
        border-radius: 50%;
        border: 4px solid white;
    }
`;

const ClientInfo = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;

    p:last-child {
        font-family: 'Open Sans', sans-serif !important;
        font-weight: 400;
    }
`;
