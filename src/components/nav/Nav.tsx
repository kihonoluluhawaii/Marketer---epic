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

    const menuItems = [
        'Home',
        'Pages',
        'Case Studies',
        'Elements',
        'Blog',
        'Contact',
    ];

    return (
        <NavWrapper>
            <MainLogo src={pencilIcon} alt={'pencil icon'} />
            <NavMenu>
                {menuItems.map((item) => (
                    <MenuItem
                        key={item}
                        isActive={activeItem === item}
                        onClick={() => {
                            setActiveItem(item);
                        }}
                    >
                        <span>{item}</span>
                    </MenuItem>
                ))}
                <SeoButton>FREE SEO ANALYSIS</SeoButton>
            </NavMenu>
        </NavWrapper>
    );
};

export default Nav;
