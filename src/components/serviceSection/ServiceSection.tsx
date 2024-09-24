import serviceImg1 from '../../../public/images/services1.jpg';
import serviceImg2 from '../../../public/images/services2.jpg';
import serviceImg3 from '../../../public/images/services3.jpg';
import styled from '@emotion/styled';

const ServiceSection = () => {
    return (
        <ServiceSectionWrapper>
            <ServiceSectionHeader>
                <h2>Amazing Features</h2>
                <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority
                    <br /> have suffered alteration, by injected humour, or new
                    randomised words.
                </p>
            </ServiceSectionHeader>
            <ServiceLists>
                <Service>
                    <img src={serviceImg1} alt={'service image'} />
                    <h3>Fully Customizable</h3>
                    <p>
                        Curabitur quam etsum lacus etsumis nulat
                        <br /> iaculis ets vitae etsum nisle varius sed aliquam
                        <br /> ets vitae dictis netsum.
                    </p>
                </Service>
                <Service>
                    <img src={serviceImg2} alt={'service image'} />
                    <h3>Fully Customizable</h3>
                    <p>
                        Curabitur quam etsum lacus etsumis nulat
                        <br /> iaculis ets vitae etsum nisle varius sed aliquam
                        <br />
                        ets vitae dictis netsum.
                    </p>
                </Service>
                <Service>
                    <img src={serviceImg3} alt={'service image'} />
                    <h3>Fully Customizable</h3>
                    <p>
                        Curabitur quam etsum lacus etsumis nulat
                        <br /> iaculis ets vitae etsum nisle varius sed aliquam
                        <br />
                        ets vitae dictis netsum.
                    </p>
                </Service>
            </ServiceLists>
        </ServiceSectionWrapper>
    );
};

export default ServiceSection;

const ServiceSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 90px 0 50px;
    color: #7c8595;
    border-top: 1px solid rgb(234, 234, 234);
`;

const ServiceSectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
        margin-bottom: 15px;
        font-size: 32px;
        color: #2f362f;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
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

    img {
        width: 120px;
        border-radius: 50%;
    }
`;
