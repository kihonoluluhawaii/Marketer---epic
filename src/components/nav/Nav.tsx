import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import ImageResource from '../ImageResouce/ImageResource.tsx';
import { Dropdown, DropdownWithBg, DropdownWithTitle } from './Dropdown.tsx';

const Nav = () => {
    return (
        <Container>
            <ContentContainer>
                <ImageResource
                    name="mainlogo"
                    alt="mainlogo image"
                    width={172}
                    height={45}
                />
                <NavMenu>
                    <MenuItem>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            Home
                        </NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            to="/pages"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            Pages
                        </NavLink>
                        <DropdownWithTitle />
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            to="/case_studies"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            Case Studies
                        </NavLink>
                        <Dropdown>
                            <BasicListDropdown>
                                <BasicListItem>Case Studies Main</BasicListItem>
                                <BasicListItem>
                                    Standard Two Columns
                                </BasicListItem>
                                <BasicListItem>
                                    Gallery Two Columns
                                </BasicListItem>
                                <BasicListItem>
                                    Standard Three Columns
                                </BasicListItem>
                                <BasicListItem>
                                    Gallery Three Columns
                                </BasicListItem>
                                <BasicListItem>
                                    Standard Four Columns
                                </BasicListItem>
                                <BasicListItem>
                                    Gallery Four Columns
                                </BasicListItem>
                            </BasicListDropdown>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            to="/elements"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            Elements
                        </NavLink>
                        <DropdownWithBg />
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            Blog
                        </NavLink>
                        <Dropdown>
                            <BasicListDropdown>
                                <BasicListItem>Blog Listing</BasicListItem>
                                <BasicListItem>Blog Single</BasicListItem>
                            </BasicListDropdown>
                        </Dropdown>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                isActive ? 'active' : ''
                            }
                        >
                            Contact
                        </NavLink>
                    </MenuItem>
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

    img {
        cursor: pointer;
    }
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
    padding: 30px 15px;
    cursor: pointer;
    box-sizing: border-box;

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
