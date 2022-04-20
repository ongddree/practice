// 액션 타입 만들기
// Ducks 패턴을 따를땐 액션의 이름에 접두사 추가
// 다른 모둘과 이름 중복 막기
const SET_DIFF: string = 'counter/SET_DIFF';
const INCREASE: string = 'counter/INCREASE';
const DECREASE: string = 'counter/DECREASE';

// export 액션 생성 함수
export const setDiff = (diff: any) => ({ type: SET_DIFF, diff });
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

//초기 상태 선언
const initialState = {
  number: 0,
  diff: 1,
};

// export default 리듀서
export default function counter(state = initialState, action: any) {
  switch (action.type) {
    case SET_DIFF:
      return {
        ...state,
        diff: action.diff,
      };
    case INCREASE:
      return {
        ...state,
        number: state.number + state.diff,
      };
    case DECREASE:
      return {
        ...state,
        number: state.number - state.diff,
      };
    default:
      return state;
  }
}
