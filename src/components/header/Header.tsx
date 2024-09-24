import xIcon from '../../../public/images/twitter.svg';
import phoneIcon from '../../../public/images/phone.png';
import locationIcon from '../../../public/images/location.png';
import {
    HeaderTopContainer,
    HeaderTopLeft,
    HeaderTopRight,
    HeaderWrapper,
    IconStyled,
    IconWrapper,
    LocationNumberIcon,
    LocationNumberWrapper,
} from './HeaderStyles.tsx';

function Header() {
    return (
        <>
            <HeaderWrapper>
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
            </HeaderWrapper>
        </>
    );
}

export default Header;
