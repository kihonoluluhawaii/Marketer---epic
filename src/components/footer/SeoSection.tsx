import styled from '@emotion/styled';

const SeoSection = () => {
    return (
        <Container>
            <h2>SEO SCORE</h2>
            <p>
                Test your site now and get {'\n'}the reliable and accurate
                information {'\n'}you for your online presence.
            </p>
            <button>Check Your Score</button>
        </Container>
    );
};

export default SeoSection;

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
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        color: #dddddd;
        white-space: pre-line;
    }

    button {
        width: 160px;
        height: 48px;
        padding: 14px 20px;
        font-size: 14px;
        color: #ffffff;
        border-radius: 6px;
        border: none;
        background-color: #3498db;
        cursor: pointer;
        transition: filter 0.4s;

        &:hover {
            filter: brightness(88%);
        }
    }
`;
