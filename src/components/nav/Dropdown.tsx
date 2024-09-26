import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

type Props = {
    children: ReactNode;
};

type DropdownTitleProps = {
    title: string;
    subtitle?: string;
    content: ReactNode[];
};

export const Dropdown: React.FC<Props> = ({ children }) => {
    return <Container>{children}</Container>;
};

export const DropdownWithTitle: React.FC<DropdownTitleProps> = ({
    title,
    subtitle,
    content,
}) => {
    return (
        <DropdownSection>
            <DropdownHeader>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </DropdownHeader>
            <ContentList>
                {content.map((item, index) => (
                    <ContentItem key={index}>{item}</ContentItem>
                ))}
            </ContentList>
        </DropdownSection>
    );
};

const Container = styled.div`
    display: none;
    position: absolute;
    z-index: 1;

    top: 100%;
    left: 0;
    min-width: 200px;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const DropdownSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    box-sizing: border-box;
    padding: 20px 25px;
    border-radius: 4px;
    background-color: white;
`;

const DropdownHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-block: 10px;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: 500;
    color: #2f362f;
`;

const SubTitle = styled.div`
    font-size: 13px;
    font-weight: 400;
    color: #7c8595;
`;

const ContentList = styled.div`
    margin-top: 8px;
`;

const ContentItem = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    color: #7c8595;

    &:hover {
        color: rgb(52, 152, 219);
    }
`;
