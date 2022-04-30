import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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

  if (isLoading) return <div>'Loading...';</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <h1>{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{' '}
      <strong>✨ {data?.stargazers_count}</strong>{' '}
      <strong>🍴 {data?.forks_count}</strong>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
};

export default FetchTestPage;
