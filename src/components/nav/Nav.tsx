import pencilIcon from '../../../public/images/pencil.png';
import {
    MainLogo,
    MenuItem,
    NavMenu,
    NavWrapper,
    SeoButton,
} from './NavStyles.tsx';
import { useState } from 'react';

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
