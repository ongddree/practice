import { useState, useEffect } from 'react';
import { CodingResourcesType } from 'types/CodingResources';
import { API_ENDPOINT } from 'constants/.';
import VideoCard from './VideoCard';

const ApiContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    await fetch(`${API_ENDPOINT}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <h2>코딩 영상 모음</h2>
      <ul>
        {data
          ?.filter(
            (e: CodingResourcesType) =>
              e.topics.includes('js') || e.topics.includes('javascript')
          )
          .map((e: CodingResourcesType, i) => {
            return <VideoCard key={`video-${i}`} videoData={e} />;
          })}
      </ul>
    </section>
  );
};

export default ApiContainer;
