import styled from 'styled-components';
import { CodingResourcesType } from 'types/CodingResources';

interface VideoCardProps {
  videoData: CodingResourcesType;
}

const VideoCard = ({ videoData }: VideoCardProps) => {
  const { description, url, topics } = videoData;
  return (
    <Card>
      <Preview>
        <iframe title={description} src={url} frameBorder="0"></iframe>
      </Preview>
      <Desc>
        <p>{description}</p>
        {topics.map((topic, index) => {
          return <Topic key={`topic-${topic}-${index}`}>{topic}</Topic>;
        })}
      </Desc>
    </Card>
  );
};

export default VideoCard;

const Card = styled.li`
  display: flex;
  gap: 20px;
`;

const Preview = styled.div``;

const Desc = styled.div`
  text-align: center;
`;

const Topic = styled.span`
  margin-right: 10px;
`;
