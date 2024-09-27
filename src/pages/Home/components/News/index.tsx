import styled from '@emotion/styled';
import SectionHeader from '../SectionHeader.tsx';
import ImageResource, {
    ImageName,
} from '../../../../components/ImageResouce/ImageResource.tsx';
import Icon from '../../../../components/Icon/Icon.tsx';
import { ReactIconsType } from '../../../../components/Icon/IconList.tsx';

const newsList: Array<{
    newsImage: ImageName;
    newsTitle: string;
    authorIcon: ReactIconsType;
    authorName: string;
    stack: string;
    newsDesc: string;
}> = [
    {
        newsImage: 'news1',
        newsTitle: 'Discover Digital Marketing',
        authorIcon: 'people',
        authorName: 'Paul Smith',
        stack: 'WordPress',
        newsDesc:
            'Quis autem velis etis reprehender etims \n quiste voluptate velite esse quam nihil etsa\n illum sedit consequatur netsum...',
    },
    {
        newsImage: 'news2',
        newsTitle: 'Social Media Integration',
        authorIcon: 'people',
        authorName: 'By John Doe',
        stack: 'Marketing',
        newsDesc:
            'Quis autem velis etis reprehender etims \n quiste voluptate velite esse quam nihil etsa\n illum sedit consequatur netsum...',
    },
    {
        newsImage: 'news3',
        newsTitle: 'Safe Payment Method',
        authorIcon: 'people',
        authorName: 'By Joe Smith Smith',
        stack: 'Design',
        newsDesc:
            'Quis autem velis etis reprehender etims \n quiste voluptate velite esse quam nihil etsa\n illum sedit consequatur netsum...',
    },
];
const News = () => {
    return (
        <Container>
            <SectionHeader
                title="Our Latest News"
                subtitle="There are many variations of passages of Lorem Ipsum available, but the majority
have suffered alteration, by injected humour, or new randomised words."
            />
            <NewsContainer>
                {newsList.map((item, index) => (
                    <NewsCard key={index}>
                        <ImageResource
                            name={item.newsImage}
                            alt={`${item.newsTitle} image`}
                            width={360}
                        />
                        <NewsInfo>
                            <h2>{item.newsTitle}</h2>
                            <div>
                                <Icon
                                    name={item.authorIcon}
                                    size={24}
                                    color="#858585"
                                />
                                <span>{item.authorName}</span>
                                <hr />
                                <span>{item.stack}</span>
                            </div>
                            <p>{item.newsDesc}</p>
                        </NewsInfo>
                    </NewsCard>
                ))}
            </NewsContainer>
        </Container>
    );
};

export default News;

const Container = styled.div`
    width: 100%;
    padding-block: 90px;
`;

const NewsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1140px;
`;

const NewsCard = styled.div`
    margin-top: 40px;
    padding: 0 15px;

    img {
        transition: filter 0.3s ease;

        &:hover {
            filter: brightness(50%);
        }
    }
`;

const NewsInfo = styled.div`
    width: 360px;
    padding: 0 25px 20px;
    border-bottom: 2px solid #e0e0e0;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    h2 {
        margin-block: 15px 10px;
        color: #454545;
        cursor: pointer;
        transition: color 0.4s;

        &:hover {
            color: #228798;
        }
    }
    div {
        display: flex;
        align-items: center;
        gap: 4px;

        span {
            color: #858585;
            cursor: pointer;
            font-style: italic;
            font-size: 14px;
            font-weight: 400;
            &:hover {
                color: #228798;
            }
        }

        hr {
            height: 20px;
            margin-inline: 10px;
        }
    }

    p {
        margin-block: 20px;
        font-size: 15px;
        font-weight: 400;
        line-height: 24px;
        color: #7c8595;
        white-space: pre-line;
    }
`;
