import { createStore } from 'redux';

// 상태 정의
const initialState = {
  counter: 0,
  text: '',
  list: [],
};

// 액션 타입 정의 - 대문자
const INCREASE: string = 'INCREASE';
const DECREASE: string = 'DECREASE';
const CHANGE_TEXT: string = 'CHANGE_TEXT';
const ADD_TO_LIST: string = 'ADD_TO_LIST';

// 액션 생성함수 정의 - camelCase

const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text: string) => ({
  type: CHANGE_TEXT,
  text, // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
});

const addToList = (item: any) => ({
  type: ADD_TO_LIST,
  item,
});

//리듀서 만들기
// 액션 생성함수를 통해 만들어진 액션 객체를 참조하여 새로운 상태를 만드는 함수

function reducer(state = initialState, action: any) {
  // state 의 초깃값을 initialState 로 지정.
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

// 스토어 만들기
const store = createStore(reducer);

// 스토어 안에 들어있는 상태 조회
console.log(store.getState());

// 스토어 안에 들어있는 상태가 바뀔 때마다 호출되는 listener 함수
const listener = () => {
  const state = store.getState();
  console.log(state);
};

//구독 해제
const unsubscribe = store.subscribe(listener);

// 액션들 디스패치.
store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({ id: 1, text: '와우' }));
