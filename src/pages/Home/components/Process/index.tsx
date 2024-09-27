import styled from '@emotion/styled';
import SectionHeader from '../SectionHeader.tsx';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';

const programList: Array<{ programId: number; name: ImageName; text: string }> =
    [
        { programId: 1, name: 'process1', text: 'Research' },
        { programId: 2, name: 'process2', text: 'Strategy' },
        { programId: 3, name: 'process3', text: 'Development' },
        { programId: 4, name: 'process5', text: 'Optimization' },
    ];

const Process = () => {
    return (
        <Container>
            <SectionHeader
                title="The Working Process"
                subtitle="There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration, by injected humour, or new randomised words."
            />
            <Course>
                {programList.map((item) => (
                    <div key={item.programId}>
                        <DottedCircle>
                            <ImageResource
                                name={item.name}
                                alt={`${item.name} image`}
                                width={165}
                            />
                        </DottedCircle>
                        <p>{item.text}</p>
                    </div>
                ))}
            </Course>
        </Container>
    );
};

export default Process;

const Container = styled.div`
    padding-top: 90px;
`;

const Course = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;
    margin: 80px auto;
    text-align: center;
    background-image: url('/images/background.png');
    background-size: 1400px 180px;
    background-repeat: no-repeat;
    background-position: center;

    p {
        padding: 20px;
        font-size: 18px;
        font-weight: 700;
        color: #454545;
    }
`;

const DottedCircle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 185px;
    height: 185px;
    box-sizing: border-box;
    border: 2px dashed #ccc; // Adjust color as needed
    border-radius: 50%;

    img {
        border-radius: 50%;
        transition: opacity 0.2s ease;
        &:hover {
            opacity: 0.5;
        }
    }
`;
