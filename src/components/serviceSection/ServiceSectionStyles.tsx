import styled from '@emotion/styled';

export const ServiceSectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 90px 0 50px;
    color: #7c8595;
    border-top: 1px solid rgb(234, 234, 234);
    width: 100%;
`;

export const ServiceSectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h2 {
        color: #2f362f;
        font-size: 32px;
        margin-bottom: 15px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
`;

export const ServiceLists = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    text-align: center;

    h3 {
        color: #2f362f;
        font-size: 20px;
        margin: 20px 0 10px;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
`;

export const Service = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;
    padding: 0 30px;

    img {
        width: 120px;
        border-radius: 50%;
    }
`;
