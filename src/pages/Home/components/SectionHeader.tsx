import React from 'react';
import styled from '@emotion/styled';

type Props = {
    title: string;
    subtitle?: string;
    className?: string;
};

const SectionHeader: React.FC<Props> = ({ title, subtitle, className }) => {
    return (
        <SectionHeaderWrapper className={className}>
            <h2>{title}</h2>
            {subtitle && <p>{subtitle}</p>}
        </SectionHeaderWrapper>
    );
};

export default SectionHeader;

const SectionHeaderWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    text-align: center;

    h2 {
        margin-bottom: 15px;
        font-size: 32px;
        color: #2f362f;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        white-space: pre-line;
    }
`;
