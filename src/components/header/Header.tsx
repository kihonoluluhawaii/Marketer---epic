import styled from '@emotion/styled';
import Icon from '../Icon/Icon.tsx';

const Header = () => {
    return (
        <Container>
            <HeaderTopContainer>
                <HeaderTopLeft>
                    <SnsIconWrapper>
                        <Icon
                            name="x"
                            wrapperSize={42}
                            size={17}
                            color={'rgb(228, 241, 254)'}
                            activeColor={'skyblue'}
                        />
                    </SnsIconWrapper>
                    <SnsIconWrapper>
                        <Icon
                            name="pinterest"
                            wrapperSize={42}
                            size={17}
                            color={'rgb(228, 241, 254)'}
                            activeColor={'#f28'}
                        />
                    </SnsIconWrapper>
                    <SnsIconWrapper>
                        <Icon
                            name="facebook"
                            wrapperSize={42}
                            size={17}
                            color={'rgb(228, 241, 254)'}
                            activeColor={'#f28'}
                        />
                    </SnsIconWrapper>
                    <SnsIconWrapper>
                        <Icon
                            name="instagram"
                            wrapperSize={42}
                            size={17}
                            color={'rgb(228, 241, 254)'}
                            activeColor={'#f28'}
                        />
                    </SnsIconWrapper>
                    <SnsIconWrapper>
                        <Icon
                            name="skype"
                            wrapperSize={42}
                            size={17}
                            color={'rgb(228, 241, 254)'}
                            activeColor={'#f28'}
                        />
                    </SnsIconWrapper>
                </HeaderTopLeft>
                <HeaderTopRight>
                    <LocationNumberWrapper>
                        <Icon
                            name="phone"
                            wrapperSize={32}
                            size={20}
                            color={'rgb(228, 241, 254)'}
                        />
                        <span> 1-9870654-3210</span>
                    </LocationNumberWrapper>
                    <LocationNumberWrapper>
                        <Icon
                            name="location"
                            wrapperSize={32}
                            size={20}
                            color={'rgb(228, 241, 254)'}
                        />
                        <span> 123, Regal Garden, London, UK</span>
                    </LocationNumberWrapper>
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

const HeaderTopRight = styled.div`
    display: flex;
    gap: 20px;
`;

const LocationNumberWrapper = styled.div`
    display: flex;
    align-items: center;
    color: rgb(228, 241, 254);
`;

const SnsIconWrapper = styled.div`
    display: flex;
    border-right: 1px solid rgb(228, 241, 254, 0.15);
`;
