/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import ImageResource from '@/components/ImageResouce/ImageResource.tsx';
import SectionHeader from '../SectionHeader.tsx';

const ServiceSection = () => {
    return (
        <Container>
            <SectionHeader
                title="Amazing Features"
                subtitle={`There are many variations of passages of Lorem Ipsum available, but the majority
                have suffered alteration, by injected humour, or new randomised words.`}
            />

            <ServiceLists>
                <Service>
                    <ImageStyled
                        name={'service1'}
                        alt={'services1 image'}
                        width={120}
                    />
                    <h3>Fully Customizable</h3>
                    <p>
                        Curabitur quam etsum lacus etsumis nulat
                        <br /> iaculis ets vitae etsum nisle varius sed aliquam
                        <br /> ets vitae dictis netsum.
                    </p>
                </Service>
                <Service>
                    <ImageStyled
                        name={'service2'}
                        alt={'services1 image'}
                        width={120}
                    />
                    <h3>Fully Customizable</h3>
                    <p>
                        Curabitur quam etsum lacus etsumis nulat
                        <br /> iaculis ets vitae etsum nisle varius sed aliquam
                        <br />
                        ets vitae dictis netsum.
                    </p>
                </Service>
                <Service>
                    <ImageStyled
                        name={'service3'}
                        alt={'services1 image'}
                        width={120}
                    />
                    <h3>Fully Customizable</h3>
                    <p>
                        Curabitur quam etsum lacus etsumis nulat
                        <br /> iaculis ets vitae etsum nisle varius sed aliquam
                        <br />
                        ets vitae dictis netsum.
                    </p>
                </Service>
            </ServiceLists>
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
