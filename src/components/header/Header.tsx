import styled from '@emotion/styled';
import Icon from '../Icon/Icon.tsx';

const Header = () => {
    return (
        <Container>
            <HeaderTopContainer>
                <HeaderTopLeft>
                    <SnsLink activeColor={'black'}>
                        <Icon
                            name="close"
                            size={17}
                            color={'rgb(228, 241, 254)'}
                        />
                    </SnsLink>
                    <SnsLink activeColor={'#f28'}>
                        <Icon
                            name="pinterest"
                            size={17}
                            color={'rgb(228, 241, 254)'}
                        />
                    </SnsLink>
                    <SnsLink activeColor={'#4267B2'}>
                        <Icon
                            name="facebook"
                            size={17}
                            color={'rgb(228, 241, 254)'}
                        />
                    </SnsLink>
                    <SnsLink activeColor={'#c13584'}>
                        <Icon
                            name="instagram"
                            size={17}
                            color={'rgb(228, 241, 254)'}
                            activeColor={'#f28'}
                        />
                    </SnsLink>
                    <SnsLink activeColor={'skyblue'}>
                        <Icon
                            name="skype"
                            size={17}
                            color={'rgb(228, 241, 254)'}
                        />
                    </SnsLink>
                </HeaderTopLeft>
                <HeaderTopRight>
                    <Contact>
                        <Icon
                            name="phone"
                            size={20}
                            color={'rgb(228, 241, 254)'}
                        />
                        <p> 1-987-0654-3210 </p>
                    </Contact>
                    <Contact>
                        <Icon
                            name="location"
                            size={20}
                            color={'rgb(228, 241, 254)'}
                        />
                        <p> 123, Regal Garden, London, UK </p>
                    </Contact>
                </HeaderTopRight>
            </HeaderTopContainer>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #333;
`;

const HeaderTopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1140px;
`;

const HeaderTopLeft = styled.div`
    display: flex;
    align-items: center;
`;

const SnsLink = styled.div<{ activeColor?: string }>`
    display: flex;
    padding: 12px;
    border-right: 1px solid rgb(228, 241, 254, 0.15);

    &:hover {
        background-color: ${({ activeColor }) => activeColor};
    }
`;

const HeaderTopRight = styled.div`
    display: flex;
    gap: 20px;
`;

const Contact = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;
    color: rgb(228, 241, 254);

    p {
        font-family: 'Open Sans', sans-serif;
        font-size: 14px;
        line-height: 20px;
    }
`;
