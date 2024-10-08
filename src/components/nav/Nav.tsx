import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import ImageResource from '../ImageResouce/ImageResource.tsx';
import { Dropdown, DropdownWithBg, DropdownWithTitle } from './Dropdown.tsx';
import { useState } from 'react';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Container>
            <ContentContainer>
                <ImageResource
                    name="mainlogo"
                    alt="mainlogo image"
                    width={172}
                    height={45}
                />
                <BurgerButton onClick={() => setIsOpen(!isOpen)}>
                    <div />
                    <div />
                    <div />
                </BurgerButton>
                <NavMenu isOpen={isOpen}>
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
                    <SeoButton>free seo analysis</SeoButton>
                </NavMenu>
            </ContentContainer>
        </Container>
    );
};

export default Nav;

const Container = styled.div`
    position: relative;
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 16px;
`;

const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 88px;

    img {
        cursor: pointer;
    }

    @media (max-width: 990px) {
        flex-wrap: wrap;
        height: 100%;
        min-height: 88px;
    }
`;

const NavMenu = styled.ul<{ isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
    list-style: none;
    margin: 0;
    padding: 0;

    @media (max-width: 990px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        border-top: 1px solid rgb(231, 231, 231);
    }
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

        &.active,
        &:hover {
            color: rgb(52, 152, 219);
        }
    }

    @media (max-width: 990px) {
        width: 100%;
        text-align: left;
        padding: 12px;
    }
`;

const BurgerButton = styled.button`
    display: none;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 44px;
    height: 34px;
    padding: 4px;
    border: 1px solid rgb(221, 221, 221);
    border-radius: 4px;
    background-color: inherit;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:hover {
        background-color: #dddddd;
    }

    @media (max-width: 990px) {
        display: flex;
    }

    div {
        position: relative;
        width: 24px;
        height: 2px;
        background-color: #888888;
        border-radius: 10px;
        transition: all 0.3s;
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

    @media (max-width: 990px) {
        position: relative;
        display: block;
        width: 240px;
        padding-top: 0;
        padding-bottom: 10px;
    }
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
    @media (max-width: 990px) {
        position: static;
        top: 0;
        left: 0;
        padding: 10px 20px;
        border: none;
        background-color: transparent;
    }
`;

const SeoButton = styled.button`
    padding: 17px 20px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(52, 152, 219);
    border: 2px solid rgb(52, 152, 219);
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    white-space: nowrap;
    background-color: inherit;
    text-transform: uppercase;

    &:hover {
        color: white;
        background-color: rgb(52, 152, 219);
        transition: 0.4s;
    }

    @media (max-width: 990px) {
        width: 100%;
        border: none;
        text-align: left;
        padding: 12px;
        text-transform: capitalize;
        background-color: white;
    }
`;
