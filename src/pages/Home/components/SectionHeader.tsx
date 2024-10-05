import React from 'react';
import styled from '@emotion/styled';

type Props = {
    title: string;
    subtitle?: string;
    className?: string;
    titleColor?: string;
    subTitleColor?: string;
};

const SectionHeader: React.FC<Props> = ({
    title,
    subtitle,
    className,
    titleColor = '#2f362f',
    subTitleColor = '#7c8595',
}) => {
    return (
        <Container
            className={className}
            titleColor={titleColor}
            subTitleColor={subTitleColor}
        >
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </Container>
    );
};

export default SectionHeader;

const Container = styled.div<{ titleColor?: string; subTitleColor?: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    text-align: center;

    h2 {
        margin-bottom: 15px;
        font-size: 32px;
        color: ${({ titleColor }) => titleColor};
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        white-space: pre-line;
        color: ${({ subTitleColor }) => subTitleColor};
    }
`;
