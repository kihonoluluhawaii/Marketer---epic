import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
    width: 100%;
    background-color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const HeaderTopContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    display: flex;
    justify-content: space-between;
`;

export const HeaderTopLeft = styled.div`
    display: flex;
    align-items: center;
`;

export const IconWrapper = styled.div<{ hoverColor?: string }>`
    width: 42px;
    padding: 12px;
    box-sizing: border-box;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.hoverColor};
    }
`;

export const IconStyled = styled.img`
    width: 17px;
`;

export const HeaderTopRight = styled.div`
    display: flex;
    gap: 24px;
    align-items: center;
`;
export const LocationNumberWrapper = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    color: rgb(222, 222, 222);
`;

export const LocationNumberIcon = styled.img`
    width: 20px;
`;

export const HeaderBottomWrapper = styled.header`
    width: 100%;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderBottomContainer = styled.div`
    width: 100%;
    max-width: 1140px;
    display: flex;
    justify-content: space-between;
`;
