import React, { useReducer } from 'react';
import { useState } from 'react';
import { isNumericLiteral } from 'typescript';

type Action = { type: 'INCREASE' } | { type: 'DECREASE' };

//reducer(현재 상태, 액션 객체) return 새로운 상태
function reducer(state: number, action: Action): number {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      throw new Error('Unhandled action');
  }
}

const Counter = () => {
  //const [현재 상태, 액션 발생 시키는 함수] = useReducer(reducer 함수, 초기 상태값);
  const [number, dispatch] = useReducer(reducer, 0);

  //setState 파라미터로 값을 업데이트하는 함수를 넣어주는 함수형 업데이트를 통해 컴포넌트 최적화
  // const onIncrease = () => {
  //   setNumber((preNumber) => preNumber + 1);
  // };

  const onIncrease = () => {
    dispatch({ type: 'INCREASE' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREASE' });
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
