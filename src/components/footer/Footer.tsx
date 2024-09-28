import styled from '@emotion/styled';
import SeoSection from './SeoSection.tsx';
import LinkSection from './LinkSection.tsx';
import ProjectSection from './ProjectSection.tsx';
import ContactSection from './ContactSection.tsx';
import Icon from '../Icon/Icon.tsx';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <Container>
            <FooterTop>
                <SeoSection />
                <LinkSection />
                <ProjectSection />
                <ContactSection />
            </FooterTop>
            <FooterBottom>
                <CopyRight>
                    <p>© 2016 Marketer. Designed by</p>
                    <span>Bogdan Preda</span>
                </CopyRight>
                <ScrollToUp onClick={scrollToTop}>
                    <Icon name="up" size={24} color="#999" />
                </ScrollToUp>
                <FollowUs>
                    <p>Follow Us:</p>
                    <Icon name="close" size={18} color="#999" />
                    <Icon name="pinterest" size={20} color="#999" />
                    <Icon name="facebook" size={20} color="#999" />
                    <Icon name="instagram" size={20} color="#999" />
                    <Icon name="skype" size={22} color="#999" />
                </FollowUs>
            </FooterBottom>
        </Container>
    );
};

export default Footer;

const Container = styled.div`
    width: 100%;
    background-color: #353535;
`;

const FooterTop = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1170px;
    padding: 60px 0;
    border-bottom: 2px dotted #999;
    color: #ffffff;
`;

const FooterBottom = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    margin: 0 auto;
    padding: 20px 15px;
    width: 100%;
`;

const CopyRight = styled.div`
    display: flex;
    gap: 4px;
    color: #999;

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
    }

    span {
        font-size: 16px;
        text-decoration: underline;
        line-height: 24px;
        cursor: pointer;

        &:hover {
            color: #3498db;
        }
    }
`;

const ScrollToUp = styled.div`
    padding: 8px;
    border: 1px solid #999;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        border: 1px solid #3498db;
        background-color: #3498db;

        & > div {
            color: #ffffff;
        }
    }
`;

const FollowUs = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
    p {
        margin-right: 12px;
        font-size: 14px;
        line-height: 14px;
        color: #999;
    }

    div {
        &:hover {
            color: #3498db;
        }
    }
`;
