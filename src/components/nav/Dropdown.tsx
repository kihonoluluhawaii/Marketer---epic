import React, { ReactNode } from 'react';
import styled from '@emotion/styled';
import Icon from '../Icon/Icon.tsx';

type Props = {
    children: ReactNode;
};

type StyledDropdownProps = {
    title?: string;
    subtitle?: string;
    content?: ReactNode[];
};

export const Dropdown = ({ children }: Props) => {
    return <Container>{children}</Container>;
};

export const DropdownWithTitle: React.FC<StyledDropdownProps> = () => {
    return (
        <PagesDropdown>
            <DropdownSection>
                <DropdownHeader>
                    <Title>About Marketer</Title>
                    <SubTitle>Discover our company.</SubTitle>
                </DropdownHeader>
                <ContentList>
                    <ContentItem>
                        <Icon name="setting" size={15} color={'#7c8595'} />
                        <span>Our Services</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="rocket" size={15} color={'#7c8595'} />
                        <span>About Our Company</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="conversation" size={15} color={'#7c8595'} />
                        <span>Our Amazing Team</span>
                    </ContentItem>
                </ContentList>
            </DropdownSection>
            <DropdownSection>
                <DropdownHeader>
                    <Title>Extra Pages</Title>
                    <SubTitle>How we can help you.</SubTitle>
                </DropdownHeader>
                <ContentList>
                    <ContentItem>
                        <Icon name="dollar" size={15} color={'#7c8595'} />
                        <span>Pricing Packages</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="liquid" size={15} color={'#7c8595'} />
                        <span>The Latest News</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="magic" size={15} color={'#7c8595'} />
                        <span>Testimonials</span>
                    </ContentItem>
                </ContentList>
            </DropdownSection>
        </PagesDropdown>
    );
};

export const DropdownWithBg: React.FC<StyledDropdownProps> = () => {
    return (
        <ElementsDropDown>
            <BgDropdownContent>
                <DropdownHeader>
                    <Title>About Marketer</Title>
                    <SubTitle>Discover our company.</SubTitle>
                </DropdownHeader>
                <ContentList>
                    <ContentItem>
                        <Icon name="rocket" size={15} color={'#7c8595'} />
                        <span>About Our Company</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="setting" size={15} color={'#7c8595'} />
                        <span>Our Services</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="people" size={15} color={'#7c8595'} />
                        <span>Social Media Promotion</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="location" size={15} color={'#7c8595'} />
                        <span>Pricing Packages</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="bookmark" size={15} color={'#7c8595'} />
                        <span>Our Clients</span>
                    </ContentItem>
                </ContentList>
            </BgDropdownContent>
            <BgDropdownContent>
                <DropdownHeader>
                    <Title>Our Services</Title>
                    <SubTitle>How we can help you.</SubTitle>
                </DropdownHeader>
                <ContentList>
                    <ContentItem>
                        <Icon name="umbrella" size={15} color={'#7c8595'} />
                        <span>Content Marketing</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="liquid" size={15} color={'#7c8595'} />
                        <span>Social Media Promotion</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="crown" size={15} color={'#7c8595'} />
                        <span> Affiliate Management</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="setting" size={15} color={'#7c8595'} />
                        <span>SEO Optimisation</span>
                    </ContentItem>
                </ContentList>
            </BgDropdownContent>
            <BgDropdownContent>
                <DropdownHeader>
                    <Title>What We Do</Title>
                    <SubTitle>Discover our portfolio.</SubTitle>
                </DropdownHeader>
                <ContentList>
                    <ContentItem>
                        <Icon name="trophy" size={15} color={'#7c8595'} />
                        <span>Case Studies</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="phone" size={15} color={'#7c8595'} />
                        <span>Portfolio Standard</span>
                    </ContentItem>
                    <ContentItem>
                        <Icon name="conversation" size={15} color={'#7c8595'} />
                        <span>Gallery</span>
                    </ContentItem>
                </ContentList>
            </BgDropdownContent>
            <BgDropdownContent>
                <DropdownHeader>
                    <Title style={{ whiteSpace: 'pre-line' }}>
                        Creative Leading Agency for Search{'\n'} Engine
                        Optimization.
                    </Title>
                </DropdownHeader>
                <ContentList>
                    <ContentItem isLastItem>
                        <span>
                            ward-Winning SEO agency with content marketing and
                            native advertising capabilities.
                        </span>
                    </ContentItem>
                </ContentList>
            </BgDropdownContent>
        </ElementsDropDown>
    );
};

const Container = styled.div`
    display: none;
    position: absolute;
    z-index: 1000;
    top: 100%;
    left: 0;
    min-width: 200px;
    border-radius: 4px;

    @media (max-width: 990px) {
        position: static;
    }
`;

const PagesDropdown = styled.div`
    display: none;
    position: absolute;
    z-index: 1000;
    top: 100%;
    left: -10px;
    width: 480px;
    padding: 20px 25px;
    border-radius: 4px;
    overflow: hidden;
    background-color: white;
    cursor: auto;

    @media (max-width: 990px) {
        position: static;
        width: 100%;
        flex-direction: column;
        padding: 10px;
    }
`;

const ElementsDropDown = styled.div`
    display: none;
    position: absolute;
    z-index: 1000;
    top: 100%;
    left: -710px;
    width: 1150px;
    padding: 20px 25px;
    border-radius: 4px;
    overflow: hidden;
    background-color: white;
    cursor: auto;
    background-image: url('/images/dropdownbg.png');
    background-size: contain;

    @media (max-width: 990px) {
        background-image: none;
        position: static;
        width: auto;
        flex-direction: column;
        padding: 10px;
    }
`;

const DropdownSection = styled.div`
    min-width: 200px;
    box-sizing: border-box;
`;

const DropdownHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-block: 10px;

    @media (max-width: 990px) {
        display: none;
    }
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

const ContentList = styled.div``;

const ContentItem = styled.div<{ isLastItem?: boolean }>`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    font-weight: 400;
    line-height: 28px;
    color: #7c8595;

    &:hover {
        color: rgb(52, 152, 219);
        cursor: pointer;

        > div {
            color: rgb(52, 152, 219);
        }
    }

    @media (max-width: 990px) {
        display: ${({ isLastItem }) => (isLastItem ? 'none' : 'flex')};
    }
`;

const BgDropdownContent = styled.div`
    display: flex;
    flex-direction: column;
    flex-basis: 288px;
    box-sizing: border-box;

    @media (max-width: 990px) {
        flex-basis: auto;
    }
`;
