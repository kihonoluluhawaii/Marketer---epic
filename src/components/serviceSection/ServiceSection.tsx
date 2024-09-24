import {
    Service,
    ServiceLists,
    ServiceSectionHeader,
    ServiceSectionWrapper,
} from './ServiceSectionStyles.tsx';
import serviceImg1 from '../../../public/images/services1.jpg';
import serviceImg2 from '../../../public/images/services2.jpg';
import serviceImg3 from '../../../public/images/services3.jpg';

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
