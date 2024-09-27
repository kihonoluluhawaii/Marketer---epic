import styled from '@emotion/styled';
import SectionHeader from '../SectionHeader.tsx';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';

const insightData: Array<{ name: ImageName; title: string; subtitle: string }> =
    [
        {
            name: 'clock',
            title: 'Fully Customizable',
            subtitle:
                'Curabitur quam etsum lacus etsumis nulat\n iaculis ets vitae etsum nisle varius sed aliquam\n ets vitae dictis netsum.',
        },
        {
            name: 'heart',
            title: 'Responsive Design',
            subtitle:
                'Curabitur quam etsum lacus etsumis nulat\n iaculis ets vitae etsum nisle varius sed aliquam\n ets vitae dictis netsum.',
        },
        {
            name: 'notice',
            title: 'SEO Ready Code',
            subtitle:
                'Curabitur quam etsum lacus etsumis nulat\n iaculis ets vitae etsum nisle varius sed aliquam\n ets vitae dictis netsum.',
        },
        {
            name: 'letter',
            title: 'Fully Customizable',
            subtitle:
                'Curabitur quam etsum lacus etsumis nulat\n iaculis ets vitae etsum nisle varius sed aliquam\n ets vitae dictis netsum.',
        },
        {
            name: 'money',
            title: 'Responsive Design',
            subtitle:
                'Curabitur quam etsum lacus etsumis nulat\n iaculis ets vitae etsum nisle varius sed aliquam\n ets vitae dictis netsum.',
        },
        {
            name: 'lock',
            title: 'SEO Ready Code',
            subtitle:
                'Curabitur quam etsum lacus etsumis nulat\n iaculis ets vitae etsum nisle varius sed aliquam\n ets vitae dictis netsum.',
        },
    ];

const Insights = () => {
    return (
        <Container>
            <SectionHeader
                title="Amazing Features"
                subtitle="There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration, by injected humour, or new randomised words."
            />
            <Grid>
                {insightData.map((item, index) => (
                    <ContentContainer key={index}>
                        <ImageResource
                            name={item.name}
                            alt={`${item.name} image`}
                            height={72}
                        />
                        <SectionHeader
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    </ContentContainer>
                ))}
            </Grid>
        </Container>
    );
};

export default Insights;

const Container = styled.div`
    max-width: 1140px;
    padding-block: 90px 50px;
    margin: 0 auto;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 12px;
`;

const ContentContainer = styled.div`
    padding: 30px 15px;
    text-align: center;

    h2 {
        margin-top: 20px;
        font-size: 20px;
    }

    p {
        font-size: 15px;
    }
`;
