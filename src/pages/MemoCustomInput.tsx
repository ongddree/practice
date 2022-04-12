import { useCallback, useReducer, useRef, useMemo } from 'react';
import { CreateUser, UserList } from '../components/react';
import {
  CHANGE_INPUT,
  CREATE_USER,
  REMOVE_USER,
  TOGGLE_USER,
} from '../@types/UserListActions';
import { StateInterface, UserInterface, Action } from '../@types/Interface';
import useInputs from '../hooks/useInputs';

function countActiveUsers(users: Array<{ active: boolean }>) {
  console.log('활성 사용자 수 계산중...');
  return users.filter((user) => user.active).length;
}

//TODO: 타입 지정
const initialState: any = {
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
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: '',
  });

  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

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
