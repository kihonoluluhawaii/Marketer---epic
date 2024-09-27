import styled from '@emotion/styled';
import ImageResource from '../../../../components/ImageResouce/ImageResource.tsx';
import { FormEvent, useState } from 'react';

const SendEmail = () => {
    const [submitted, setSubmitted] = useState(false);

    const clickStartedAndCheckEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity()) {
            setSubmitted(true);
        } else {
            form.reportValidity();
        }
    };

    return (
        <Container>
            <EmailSection>
                <ImageResource
                    name="email"
                    alt="email image"
                    width={200}
                    height={180}
                />
                <EmailInput submitted={submitted}>
                    <h2>
                        Seen enough? We are currently in the closed beta. Please
                        enter your email to join the waiting list.
                    </h2>
                    {!submitted ? (
                        <form onSubmit={clickStartedAndCheckEmail}>
                            <input
                                required
                                type="email"
                                placeholder="Enter Your Email Address"
                            />
                            <button type="submit">GET STARTED!</button>
                        </form>
                    ) : (
                        <span>
                            We received your message and you'll hear from us
                            soon. Thank You!
                        </span>
                    )}
                </EmailInput>
            </EmailSection>
        </Container>
    );
};

export default SendEmail;

const Container = styled.div`
    display: flex;
    justify-content: center;
    color: #ffffff;
    background-color: #3498db;
`;

const EmailSection = styled.div`
    display: flex;
    max-width: 960px;
    margin: 0 90px;
    padding: 50px 0;
`;

const EmailInput = styled.div<{ submitted: boolean }>`
    width: 100%;
    padding: 0 0 30px 60px;
    border-left: 1px solid white;
    margin-left: 50px;

    h2 {
        padding: 20px 0 30px;
        font-size: 28px;
        line-height: 36px;
    }

    span {
        font-size: 18px;
        font-weight: 400;
        font-style: italic;
    }

    input {
        width: 100%;
        max-width: 400px;
        height: 56px;
        padding-inline: 26px;
        box-sizing: border-box;
        border-radius: 5px;
        border: 1px solid white;
        background-color: inherit;

        &::placeholder {
            color: rgb(255, 255, 255);
            font-size: 17px;
            font-weight: 400;
        }
    }

    button {
        max-width: 140px;
        height: 56px;
        margin-left: 12px;
        border: none;
        border-radius: 5px;
        padding: 20px;
        font-weight: 800;
        color: #2980b9;
        cursor: pointer;
        transition: 0.8s;

        &:hover {
            background-color: #2980b9;
            color: #fff;
        }
    }
`;
