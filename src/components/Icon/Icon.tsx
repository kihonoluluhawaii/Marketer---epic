import React from 'react';
import styled from '@emotion/styled';
import { iconList } from './IconList.tsx';

type Props = {
    name: keyof typeof iconList;
    size?: number;
    color?: string;
    activeColor?: string;
    wrapperSize?: number;
};

const Icon: React.FC<Props> = ({
    name,
    size = 24,
    color = 'black',
    activeColor,
    wrapperSize,
}) => {
    const IconSvg = iconList[name];

    return (
        <IconWrapper activeColor={activeColor} wrapperSize={wrapperSize}>
            <IconStyled>
                <IconSvg color={color} size={size} />
            </IconStyled>
        </IconWrapper>
    );
};

export const IconWrapper = styled.div<{
    activeColor?: string;
    wrapperSize?: number;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => `${props.wrapperSize}px`};
    height: ${(props) => `${props.wrapperSize}px`};
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => props.activeColor};
    }
`;

export const IconStyled = styled.div<{ size?: number }>`
    width: ${(props) => `${props.size}px`}
    height: ${(props) => `${props.size}px`}
`;

export default Icon;
