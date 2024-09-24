import pencilIcon from '../../../public/images/pencil.png';
import { useState } from 'react';
import styled from '@emotion/styled';

const Nav = () => {
    const [activeItem, setActiveItem] = useState('Home');

    return (
        <NavWrapper>
            <MainLogo src={pencilIcon} alt={'pencil icon'} />
            <NavMenu>
                <MenuItem isActive={activeItem === 'Home'}>
                    <span>Home</span>
                </MenuItem>
                <MenuItem
                    isActive={activeItem === 'Pages'}
                    onClick={() => setActiveItem('Pages')}
                >
                    <span>Pages</span>
                </MenuItem>
                <MenuItem isActive={activeItem === 'Case Studies'}>
                    <span>Case Studies</span>
                </MenuItem>
                <MenuItem isActive={activeItem === 'Elements'}>
                    <span>Elements</span>
                </MenuItem>
                <MenuItem isActive={activeItem === 'Blog'}>
                    <span>Blog</span>
                </MenuItem>
                <MenuItem isActive={activeItem === 'Contact'}>
                    <span>Contact</span>
                </MenuItem>
                <SeoButton>FREE SEO ANALYSIS</SeoButton>
            </NavMenu>
        </NavWrapper>
    );
};

export default Nav;

const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1140px;
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

const MenuItem = styled.li<{ isActive: boolean }>`
    padding: 0 15px;
    cursor: pointer;

    span {
        color: ${(props) => (props.isActive ? 'rgb(52, 152, 219)' : 'inherit')};
        font-size: 16px;
        font-weight: 500;
    }

    &:hover {
        color: rgb(52, 152, 219);
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
