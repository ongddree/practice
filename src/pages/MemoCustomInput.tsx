import { useCallback, useReducer, useRef, useMemo } from 'react';
import { CreateUser, UserList } from '../components/react';
import {
  CHANGE_INPUT,
  CREATE_USER,
  REMOVE_USER,
  TOGGLE_USER,
} from '../@types/UserListActions';
import { StateInterface, Action } from '../@types/Interface';

function countActiveUsers(users: Array<{ active: boolean }>) {
  console.log('활성 사용자 수 계산중...');
  return users.filter((user) => user.active).length;
}

const initialState: StateInterface = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ],
};

function reducer(state: StateInterface, action: Action): StateInterface {
  switch (action.type) {
    case CHANGE_INPUT:
      //spread 연산자 : reducer 함수에서 새로운 상태를 만들 때 불변성 지켜야함
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.payload.name]: action.payload.value,
        },
      };

    case CREATE_USER:
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.payload.user),
      };

    case TOGGLE_USER:
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.payload.id
            ? { ...user, active: !user.active }
            : user
        ),
      };

    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload.id),
      };
    default:
      return state;
  }
}

const MemoCustomInputPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const { username, email } = state.inputs;
  const nextId = useRef(4);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      const { name, value } = e.target;
      dispatch({
        type: CHANGE_INPUT,
        payload: {
          name,
          value,
        },
      });
    },
    []
  );

  const onCreate = useCallback(() => {
    dispatch({
      type: CREATE_USER,
      payload: {
        user: {
          id: nextId.current,
          username,
          email,
        },
      },
    });
    nextId.current += 1;
  }, [username, email]);

  const onToggle = useCallback((id: number) => {
    dispatch({
      type: TOGGLE_USER,
      payload: {
        id,
      },
    });
  }, []);

  const onRemove = useCallback((id: number) => {
    dispatch({
      type: 'REMOVE_USER',
      payload: { id },
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성 사용자 수 : {count}</div>
    </div>
  );
};
export default MemoCustomInputPage;
