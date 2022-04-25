import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

function useDebounce(value: string, delay = 1000) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  //컴포넌트가 렌더링되고, value가 변할때마다 실행됨.
  //1초 안에 다른 이벤트가 발생하지않으면 기존 값이 그대로 return
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    //   //1초 안에 다른 이벤트가 발생하면 이전의 useEffect가 실행되면서 clearTimeout

    return () => clearTimeout(handler);
  }, [value]);

  return debouncedValue;
}

export default function App() {
  const [keyword, setKeyword] = useState('');
  //왜 재할당되는지?..
  const fetchKeyword = useDebounce(keyword);
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      setKeyword('');
    } else {
      setKeyword(event.target.value);
    }
  };

  useEffect(() => {
    fetch(`https://api.thecatapi.com/v1/images/search?q=${keyword}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  }, [keyword]);

  return (
    <Container>
      <input type="text" onChange={handleSearch} />
      <div>realtime Value: {keyword}</div>
      <div>current Value: {fetchKeyword}</div>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 40px;
`;
