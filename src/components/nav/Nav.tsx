import pencilIcon from '../../../public/images/pencil.png';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <Container>
            <MainLogo src={pencilIcon} alt={'pencil icon'} />
            <NavMenu>
                <MenuItem>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Home
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        to="/pages"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Pages
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        to="/case_studies"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Case Studies
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        to="/elements"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Elements
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        to="/blog"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Blog
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => (isActive ? 'active' : '')}
                    >
                        Contact
                    </NavLink>
                </MenuItem>
                <SeoButton>FREE SEO ANALYSIS</SeoButton>
            </NavMenu>
        </Container>
    );
};

export default Nav;

const Container = styled.div`
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

const MenuItem = styled.li`
    padding: 0 15px;
    cursor: pointer;

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
