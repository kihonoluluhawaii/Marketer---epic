import styled from '@emotion/styled';
import ImageResource, { ImageName } from '../ImageResouce/ImageResource.tsx';

const projectData: Array<{ name: ImageName }> = [
    { name: 'portfolio1' },
    { name: 'portfolio2' },
    { name: 'portfolio3' },
    { name: 'portfolio4' },
    { name: 'portfolio5' },
    { name: 'portfolio6' },
];

const ProjectSection = () => {
    return (
        <Container>
            <h2>LATEST PROJECTS</h2>
            <ProjectImage>
                {projectData.map((item) => (
                    <div key={item.name}>
                        <ImageResource
                            name={item.name}
                            alt={`${item.name} image`}
                            width={80}
                            height={80}
                        />
                    </div>
                ))}
            </ProjectImage>
        </Container>
    );
};

export default ProjectSection;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 292px;
    padding: 0 15px 50px;
    box-sizing: border-box;

    h2 {
        position: relative;
        margin-bottom: 26px;
        font-size: 16px;
        font-weight: 500;

        &::after {
            position: absolute;
            left: 0;
            top: 30px;
            content: '';
            width: 40px;
            height: 3px;
            margin-block: 10px;
            background-color: #3498db;
        }
    }
`;

const ProjectImage = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    cursor: pointer;
    img {
        border: 5px solid rgb(41, 41, 41);
        transition: filter 0.4s;

        &:hover {
            filter: brightness(60%);
        }
    }
`;
