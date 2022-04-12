import React, { useState, useRef, useMemo, useCallback } from 'react';
import { CreateUser, UserList } from 'components/react';

const MemoPage = () => {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: true,
    };

    // 불변성을 지키며 배열 추가하는 방법
    // 1. spread 연산자 사용하기
    setUsers([...users, user]);
    // 2. concat 사용하기
    // 기존의 배열을 수정하지않고, 새로운 원소가 추가된 새로운 배열을 만들어줌.
    setUsers((users) => users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  }, [username, email]);

  //useCallback에서 의존성 배열을 빈 배열로 넣어두어 setstate를 함수형 업데이트 함으로써 최신 상태값 참조.

  const onRemove = useCallback((id: number) => {
    setUsers((users) => users.filter((ele) => ele.id !== id));
  }, []);

  const onToggle = useCallback((id: number) => {
    setUsers((users) =>
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  function countActiveUsers(users: Array<{ active: boolean }>) {
    console.log('활성 사용자 수 계산중...');
    return users.filter((user) => user.active).length;
  }
  //input입력 값이 바뀔 때마다 memopage의 state가 바뀌면서 리렌더링. 그러면 input값을 onChange를

  //useMemo(어떻게 연산할지 정의하는 함수, deps)
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자 수 : {count}</div>
    </div>
  );
};
export default MemoPage;
