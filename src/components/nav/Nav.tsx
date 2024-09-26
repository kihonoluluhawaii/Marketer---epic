import pencilIcon from '../../../public/images/pencil.png';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon.tsx';

const menuItems = [
    { to: '/', text: 'Home' },
    { to: '/pages', text: 'Pages' },
    { to: '/case_studies', text: 'Case Studies' },
    { to: '/elements', text: 'Elements' },
    { to: '/blog', text: 'Blog' },
    { to: '/contact', text: 'Contact' },
];

const Nav = () => {
    return (
        <Container>
            <ContentContainer>
                <MainLogo src={pencilIcon} alt={'pencil icon'} />
                <NavMenu>
                    {menuItems.map((item) => (
                        <MenuItem key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive ? 'active' : ''
                                }
                            >
                                {item.text}
                            </NavLink>
                        </MenuItem>
                    ))}
                    <SeoButton>FREE SEO ANALYSIS</SeoButton>
                </NavMenu>
            </ContentContainer>
        </Container>
    );
};

export default Nav;

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    height: 88px;
`;

const MainLogo = styled.img`
    width: 172px;
`;

const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    list-style: none;
`;

const MenuItem = styled.li`
    position: relative;
    padding: 15px 15px;
    cursor: pointer;

    &:hover > div {
        display: flex;
    }

    a {
        font-size: 16px;
        font-weight: 500;
        text-decoration: none;
        color: inherit;
        transition: color 0.3s ease;

        &.active {
            color: rgb(52, 152, 219);
        }

        &:hover {
            color: rgb(52, 152, 219);
        }
    }
`;

const BasicListDropdown = styled.div`
    position: absolute;
    top: 32px;
    left: -14px;
    padding-top: 12px;
    margin-top: -30px;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: white;
`;

const BasicListItem = styled.div`
    padding: 12px 20px;
    font-size: 14px;
    font-weight: 400;
    color: rgb(124, 133, 149);
    border-bottom: 1px solid #eaeaea;

    &:hover {
        color: rgb(52, 152, 219);
    }

    &:last-child {
        border-bottom: none;
    }
`;

const SeoButton = styled.button`
    padding: 17px 20px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(52, 152, 219);
    border: 2px solid rgb(52, 152, 219);
    border-radius: 5px;
    cursor: pointer;
    background: none;
    white-space: nowrap;

    &:hover {
        color: white;
        background-color: rgb(52, 152, 219);
        transition: 0.4s;
    }
`;
