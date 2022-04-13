import produce from 'immer';

const state = {
  number: 1,
  dontChangeME: 2,
};
//produce - 첫번째 파라미터에 수정하고 싶은 상태, 두번째 파라미터에 어떻게 업데이트하고 싶을지 정의하는 함수

const nextState = produce(state, (draft) => {
  draft.number += 1;
});

console.log(nextState);
