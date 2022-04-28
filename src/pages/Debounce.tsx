import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import useDebounce from 'hooks/useDebounce';

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
