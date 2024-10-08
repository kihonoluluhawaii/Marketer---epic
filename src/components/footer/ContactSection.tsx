import styled from '@emotion/styled';
import Icon from '../Icon/Icon.tsx';

const ContactSection = () => {
    return (
        <Container>
            <h2>CONTACT DETAILS</h2>
            <p>
                Get in touch today to discover how{'\n'} we can benefit your
                business.
            </p>

            <div>
                <ContactDetail>
                    <Icon name={'location'} size={18} color="#dddddd" />
                    <p>Oxford Street, London, UK, N1 1ED</p>
                </ContactDetail>
                <EmailContactDetail>
                    <Icon name={'letter'} size={18} color="#dddddd" />
                    <p>contact@marketer.com</p>
                </EmailContactDetail>
                <ContactDetail>
                    <Icon name={'phone'} size={18} color="#dddddd" />
                    <p>+44 987 654 321</p>
                </ContactDetail>
            </div>
        </Container>
    );
};

export default ContactSection;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 292px;
    padding: 0 15px 50px;
    box-sizing: border-box;

    h2 {
        position: relative;
        margin-bottom: 26px;
        font-size: 16px;
        font-weight: 500;

        &::after {
            position: absolute;
            left: 0;
            top: 30px;
            content: '';
            width: 40px;
            height: 3px;
            margin-block: 10px;
            background-color: #3498db;
        }
    }

    p {
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        color: #dddddd;
        white-space: pre-line;
    }
`;

const ContactDetail = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 8px;
    gap: 6px;

    p {
        font-size: 14px;
        font-weight: 400;
    }
`;

const EmailContactDetail = styled(ContactDetail)`
    p {
        cursor: pointer;
        &:hover {
            color: #3498db;
        }
    }
`;
