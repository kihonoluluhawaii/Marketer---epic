import styled from '@emotion/styled';
import { getReactIcon, ReactIconsType } from './IconList.tsx';

interface Props {
    name: ReactIconsType;
    size?: number;
    color?: string;
    activeColor?: string;
}

const Icon = ({
    name,
    size = 24,
    color = 'black',
    activeColor = '',
}: Props) => {
    const Component = getReactIcon(name);

    return (
        <Container size={size} activeColor={activeColor} color={color}>
            <Component />
        </Container>
    );
};

export const Container = styled.div<{
    size: number;
    activeColor: string;
    color: string;
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};
    color: ${({ color }) => color};
    cursor: pointer;

    &:hover {
        background-color: ${({ activeColor }) => activeColor};
    }
`;

export default Icon;
