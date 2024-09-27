import React from 'react';
import styled from '@emotion/styled';
import SectionHeader from '../SectionHeader.tsx';
import ProjectCard from './ProjectCard.tsx';
import ProjectStats from './ProjectStats.tsx';

type Props = {};

const Projects: React.FC<Props> = () => {
    return (
        <Container>
            <SectionHeader
                title="Lastest Projects"
                subtitle="There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration, by injected humour, or new randomised words."
                titleColor="#DDDDDD"
                subTitleColor="#BBBBBB"
            />
            <ProjectCard />
            <ProjectStats />
        </Container>
    );
};

export default Projects;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 44px;
    width: 100%;
    padding-top: 90px;
    color: #7c8595;
    border-top: 1px solid rgb(234, 234, 234);
    background-color: rgb(57, 63, 67);
`;
