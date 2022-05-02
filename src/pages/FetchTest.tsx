import { useQuery, useQueries } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import axios from 'axios';
import { useEffect } from 'react';
import { SPACELOG_API_ENDPOINT } from 'constants/index';
import { Divider } from '@material-ui/core';

interface TestData {
  name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
}

const FetchTestPage = () => {
  const { isLoading, error, data, isFetching } = useQuery<TestData, Error>(
    'repoData',
    () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json()
      )
  );

  //비동기 여러개 실행할 경우
  const results = useQueries([
    {
      queryKey: ['post'],
      queryFn: () => axios.get(`${SPACELOG_API_ENDPOINT}/posts`),
    },
    {
      queryKey: ['user'],
      queryFn: () => axios.get(`${SPACELOG_API_ENDPOINT}/userinfos`),
    },
  ]);

  const isLoad = results.every((result) => result.isLoading);

  return (
    <div>
      {isLoad ? (
        <div>로딩중</div>
      ) : (
        <div>
          <h1>{data?.name}</h1>
          <p>{data?.description}</p>
          <strong>👀 {data?.subscribers_count}</strong>{' '}
          <strong>✨ {data?.stargazers_count}</strong>{' '}
          <strong>🍴 {data?.forks_count}</strong>
          <div>{isFetching ? 'Updating...' : ''}</div>
          <ReactQueryDevtools initialIsOpen />
        </div>
      )}
    </div>
  );
};

export default FetchTestPage;
