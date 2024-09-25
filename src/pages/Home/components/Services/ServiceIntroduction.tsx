import React, { useState } from 'react';
import styled from '@emotion/styled';
import Icon from '../../../../components/Icon/Icon.tsx';

type AccordionContentProps = {
    isOpen: boolean;
};

type AccordionItemProps = {
    isActive: boolean;
};

const ServiceIntroduction: React.FC = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index: any) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const accordionItems = [
        {
            index: 1,
            title: "What's the difference between organic vs. paid results?",
            content:
                'Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum loris fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et quis autem velis reprehenderit et quis voluptate velit esse quam nihil poris ratione sequi enim ipsam voluptatem quia volupti tempor.',
            icon: 'rocket' as const,
        },
        {
            index: 2,
            title: 'Should I optimize my domain name to include keywords?',
            content:
                'Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum loris fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et quis autem velis reprehenderit et quis voluptate velit esse quam nihil poris ratione sequi enim ipsam voluptatem quia volupti tempor.',
            icon: 'trophy' as const,
        },
        {
            index: 3,
            title: 'What is the difference between indexed and crawling?',
            content:
                'Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum loris fugit, sed quia magni dolores eos qui ratione sequi nesciunt. Neque et quis autem velis reprehenderit et quis voluptate velit esse quam nihil poris ratione sequi enim ipsam voluptatem quia volupti tempor.',
            icon: 'gift' as const,
        },
    ];
    return (
        <Container>
            <ServiceVideoWrapper>
                <ServiceVideo
                    src="https://player.vimeo.com/video/84573063"
                    width="555"
                    height="312"
                />
            </ServiceVideoWrapper>
            <AccordionWrapper>
                {accordionItems.map((item) => (
                    <AccordionItem
                        key={item.title}
                        isActive={activeAccordion === item.title}
                    >
                        <AccordionTitle
                            onClick={() => toggleAccordion(item.title)}
                        >
                            <Icon
                                name={item.icon}
                                size={20}
                                color="rgb(101, 101, 101)"
                            />
                            {item.title}
                        </AccordionTitle>
                        <AccordionContent
                            isOpen={activeAccordion === item.title}
                        >
                            {item.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </AccordionWrapper>
        </Container>
    );
};

export default ServiceIntroduction;

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px 0;
    padding: 90px 0;
    border-top: 1px solid #eaeaea;
`;

const ServiceVideoWrapper = styled.div`
    padding: 0 15px;
    box-sizing: border-box;
`;

const ServiceVideo = styled.iframe`
    border: none;
`;

const AccordionWrapper = styled.div`
    flex: 1;
    max-width: 553px;
    padding: 0 15px;
`;

const AccordionItem = styled.div<AccordionItemProps>`
    border-bottom: ${(props) =>
        props.isActive ? '3px solid #3498db' : '1px solid #eaeaea'};
    padding: 12px 10px 16px;
    transition: all 0.1s ease-out;
`;

const AccordionTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgb(101, 101, 101);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    cursor: pointer;
`;

const AccordionContent = styled.div<AccordionContentProps>`
    max-height: ${(props) => (props.isOpen ? '200px' : '0')};
    padding: ${(props) => (props.isOpen ? '20px 10px 10px' : '0 10px')};
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    color: #7c8595;
    opacity: ${(props) => (props.isOpen ? 1 : 0.8)};
    overflow: hidden;
    box-sizing: border-box;
    transition: all 0.4s ease-in-out;
`;
