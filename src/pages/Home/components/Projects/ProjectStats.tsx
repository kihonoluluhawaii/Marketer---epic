import styled from '@emotion/styled';
import { ReactIconsType } from '../../../../components/Icon/IconList.tsx';
import Icon from '../../../../components/Icon/Icon.tsx';

const projectStatList: Array<{
    name: ReactIconsType;
    statsNumber: string;
    statsText: string;
}> = [
    { name: 'ruler', statsNumber: '1050+', statsText: 'Project Completed' },
    { name: 'umbrella', statsNumber: '217k', statsText: 'Happy Clients' },
    { name: 'crown', statsNumber: '1210', statsText: 'Design Awards' },
    { name: 'drink', statsNumber: '2137', statsText: 'Cups Of Coffee' },
    { name: 'conversation', statsNumber: '24/7', statsText: 'Fast Support' },
];

const ProjectStats = () => {
    return (
        <Container>
            <ProjectStatus>
                {projectStatList.map((item) => (
                    <StatsOverview key={item.name}>
                        <Icon
                            name={item.name}
                            size={40}
                            color={'rgb(52, 152, 219)'}
                        />
                        <h3>{item.statsNumber}</h3>
                        <p>{item.statsText}</p>
                    </StatsOverview>
                ))}
            </ProjectStatus>
        </Container>
    );
};

export default ProjectStats;

const Container = styled.div`
    width: 100%;
    padding-block: 25px 30px;
    box-sizing: border-box;
    background-color: #2f3539;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ProjectStatus = styled.div`
    width: 100%;
    max-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StatsOverview = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    height: 146px;

    h3 {
        margin-top: 20px;
        font-size: 28px;
        font-weight: 600;
        line-height: 30px;
        color: #dddddd;
    }

    p {
        margin-top: 2px;
        font-size: 14px;
        line-height: 24px;
        font-style: italic;
        color: #bbbbbb;
    }
`;
