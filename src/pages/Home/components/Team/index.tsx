import styled from '@emotion/styled';
import SectionHeader from '../SectionHeader.tsx';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';
import { ReactIconsType } from '../../../../components/Icon/IconList.tsx';
import Icon from '../../../../components/Icon/Icon.tsx';

const snsList: Array<{ name: ReactIconsType; bgColor: string }> = [
    { name: 'close', bgColor: '#4099ff' },
    { name: 'pinterest', bgColor: '#c92228' },
    { name: 'facebook', bgColor: '#3b5998' },
    { name: 'instagram', bgColor: '#ea4c89' },
];

const MemberSnsLink = () => {
    return (
        <MemberSns>
            {snsList.map((item, index) => (
                <SnsIconContainer key={index} bgColor={item.bgColor}>
                    <Icon name={item.name} size={18} color="#ffffff" />
                </SnsIconContainer>
            ))}
        </MemberSns>
    );
};

const teamMemberList: Array<{
    name: ImageName;
    memberName: string;
    memberRole: string;
    introText: string;
}> = [
    {
        name: 'client1',
        memberName: 'JOHNATHAN HAWKINS',
        memberRole: 'HEAD of SEO',
        introText:
            'Johnathan is our co-founder and has \n developed search strategies for a variety of \n clients from international brands to medium sized businesses forover five years.',
    },
    {
        name: 'client2',
        memberName: 'ALEXANDRA SMITHS',
        memberRole: 'SEO Specialist',
        introText:
            'Graduating with a degree in Spanish and \n English, Alexandra has always loved writing and now she’s lucky enough to do it as part of \n her new job inside our agency.',
    },
    {
        name: 'client3',
        memberName: 'RICHARD JOHANSON',
        memberRole: 'Marketing Manager',
        introText:
            'Richard first fell in love with digital marketing at university. He loves to learn, and looks \nforward to being part of this exciting industry \nfor many years.',
    },
];
const Team = () => {
    return (
        <Container>
            <SectionHeader
                title="Meet Our Amazing Team"
                subtitle="There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration, by injected humour, or new randomised words."
                titleColor="#dddddd"
                subTitleColor="#BBBBBB"
            />
            <TeamIntroduce>
                {teamMemberList.map((item, index) => (
                    <IntroduceCard key={index}>
                        <ImageResource
                            name={item.name}
                            alt={`${item.name} image`}
                            width={120}
                        />
                        <MemberInfo>
                            <div>
                                <h2>{item.memberName}</h2>
                                <p>{item.memberRole}</p>
                            </div>
                            <span>{item.introText}</span>
                        </MemberInfo>
                        <MemberSns />
                        <MemberSnsLink />
                    </IntroduceCard>
                ))}
            </TeamIntroduce>
        </Container>
    );
};

export default Team;

const Container = styled.div`
    padding-block: 90px;
    background-color: rgb(57, 63, 67);
`;

const TeamIntroduce = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const IntroduceCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 390px;
    padding: 40px 30px 15px;
    box-sizing: border-box;
    text-align: center;

    img {
        border-radius: 50%;
        border: 6px solid white;
        box-sizing: border-box;
    }
`;

const MemberInfo = styled.div`
    position: relative;
    font-size: 15px;
    font-weight: 400;
    line-height: 24px;
    color: #cccccc;
    white-space: pre-line;

    h2 {
        font-size: 18px;
        font-weight: 700;
        line-height: 21px;
        color: #dddddd;
        padding-bottom: 6px;
    }

    p {
        font-size: 15px;
        font-weight: 400;
        font-style: italic;
        color: #cccccc;
        padding-bottom: 40px;
    }

    &::after {
        position: absolute;
        content: '';
        top: 38%;
        left: 51%;
        transform: translateX(-51%);
        background-color: #3498db;
        width: 52px;
        height: 3px;
    }
`;

const MemberSns = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

const SnsIconContainer = styled.div<{ bgColor: string }>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background-color: ${({ bgColor }) => bgColor};
    cursor: pointer;
`;
