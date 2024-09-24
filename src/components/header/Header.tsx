import xIcon from '/images/twitter.svg';
import phoneIcon from '/images/phone.svg';
import locationIcon from '/images/location.svg';
import styled from '@emotion/styled';

const Header = () => {
    return (
        <Container>
            <HeaderTopContainer>
                <HeaderTopLeft>
                    <IconWrapper hoverColor="dodgerblue">
                        <IconStyled src={xIcon} alt="x logo image" />
                    </IconWrapper>
                    <IconWrapper hoverColor="red">
                        <IconStyled src={xIcon} alt="x logo image" />
                    </IconWrapper>
                    <IconWrapper hoverColor="blue">
                        <IconStyled src={xIcon} alt="x logo image" />
                    </IconWrapper>
                    <IconWrapper hoverColor="lime">
                        <IconStyled src={xIcon} alt="x logo image" />
                    </IconWrapper>
                    <IconWrapper hoverColor="skyblue">
                        <IconStyled src={xIcon} alt="x logo image" />
                    </IconWrapper>
                </HeaderTopLeft>
                <HeaderTopRight>
                    <LocationNumberWrapper>
                        <LocationNumberIcon src={phoneIcon} />
                        <span> 1-9870654-3210</span>
                    </LocationNumberWrapper>
                    <LocationNumberWrapper>
                        <LocationNumberIcon src={locationIcon} />
                        <span> 123, Regal Garden, London, UK</span>
                    </LocationNumberWrapper>
                </HeaderTopRight>
            </HeaderTopContainer>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    width: 100%;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HeaderTopContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    display: flex;
    justify-content: space-between;
`;

const HeaderTopLeft = styled.div`
    display: flex;
    align-items: center;
`;

const IconWrapper = styled.div<{ hoverColor?: string }>`
    width: 42px;
    padding: 12px;
    box-sizing: border-box;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.hoverColor};
    }
`;

const IconStyled = styled.img`
    width: 17px;
`;

const HeaderTopRight = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`;
const LocationNumberWrapper = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    color: rgb(222, 222, 222);
`;

const LocationNumberIcon = styled.img`
    width: 20px;
`;
