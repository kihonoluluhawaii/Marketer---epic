import styled from '@emotion/styled';

export const NavWrapper = styled.div`
    width: 100%;
    max-width: 1140px;
    height: 88px;
    display: flex;
    align-items: center;
`;

export const MainLogo = styled.img`
    width: 172px;
`;

export const NavMenu = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-grow: 1;
`;

export const MenuItem = styled.li<{ isActive: boolean }>`
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

export const SeoButton = styled.button`
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
    padding: 17px 20px;
    background: none;
    color: rgb(52, 152, 219);
    border: 2px solid rgb(52, 152, 219);
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: rgb(52, 152, 219);
        color: white;
        transition: 0.4s;
    }
`;
