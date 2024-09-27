import styled from '@emotion/styled';
import SectionHeader from '../SectionHeader.tsx';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';

const reviewList: Array<{
    reviewText: string;
    reviewerImage: ImageName;
    reviewerName: string;
    reviewerRole: string;
}> = [
    {
        reviewText: `"Pellentesque etsum is laoret mauris, dapibis etim
                        etsum, vivamus eti nibh ligula saepe present. Quis netsi
                        etsa lorem nibh ligula et evenit praesent autim fugit
                        justo et sed tempor."`,
        reviewerImage: 'client1',
        reviewerName: 'CRISTINA RICHARDS',
        reviewerRole: 'CEO - SmartDesign',
    },
    {
        reviewText: `"Pellentesque etsum is laoret mauris, dapibis etim
                        etsum, vivamus eti nibh ligula saepe present. Quis netsi
                        etsa lorem nibh ligula et evenit praesent autim fugit
                        justo et sed tempor."`,
        reviewerImage: 'client2',
        reviewerName: 'SONG KIM',
        reviewerRole: 'CEO - SmartDesign',
    },
    {
        reviewText: `"Pellentesque etsum is laoret mauris, dapibis etim
                        etsum, vivamus eti nibh ligula saepe present. Quis netsi
                        etsa lorem nibh ligula et evenit praesent autim fugit
                        justo et sed tempor."`,
        reviewerImage: 'client3',
        reviewerName: 'CRISTIANO RONALDO',
        reviewerRole: 'CEO - SmartDesign',
    },
];
const Recommend = () => {
    return (
        <Container>
            <SectionHeader
                title="Happy Clients Testimonials"
                subtitle="There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration, by injected humour, or new randomised words."
                titleColor="#ffffff"
                subTitleColor="#ffffff"
            />
            <RecommendCard>
                {reviewList.map((item) => (
                    <Content key={item.reviewerName}>
                        <TextContainer>{item.reviewText}</TextContainer>
                        <ClientContainer>
                            <ImageResource
                                name={item.reviewerImage}
                                alt={`${item.reviewerName} image`}
                                width={80}
                            />
                            <ClientInfo>
                                <p>{item.reviewerName}</p>
                                <p>{item.reviewerRole}</p>
                            </ClientInfo>
                        </ClientContainer>
                    </Content>
                ))}
            </RecommendCard>
        </Container>
    );
};

export default Recommend;

const Container = styled.div`
    width: 100%;
    padding: 90px 0;
    background-color: #3498db;
`;

const RecommendCard = styled.div`
    display: flex;
    margin: 60px auto 0;
    max-width: 1140px;
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
