import styled from '@emotion/styled';

const linkData: Array<{ title: string }> = [
    { title: 'Ecommerce SEO Services' },
    { title: 'Search Engine Optimization' },
    { title: 'Pay Per Click Marketing' },
    { title: 'Local SEO Services' },
];

const LinkSection = () => {
    return (
        <Container>
            <h2>USEFUL LINKS</h2>
            {linkData.map((item, index) => (
                <p key={index}>{item.title}</p>
            ))}
        </Container>
    );
};

export default LinkSection;

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

    p {
        padding: 0 0 10px;
        box-sizing: border-box;
        color: #dddddd;
        font-size: 14px;
        text-decoration: none;
        border-bottom: 1px #dddddd solid;
        cursor: pointer;
        &:hover {
            color: #3498db;
        }
    }
`;
