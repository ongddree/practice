import { useState } from 'react';

const Counter = () => {
  const [number, setNumber] = useState(0);

  //setState 파라미터로 값을 업데이트하는 함수를 넣어주는 함수형 업데이트를 통해 컴포넌트 최적화
  const onIncrease = () => {
    setNumber((preNumber) => preNumber + 1);
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
};
export default Counter;
