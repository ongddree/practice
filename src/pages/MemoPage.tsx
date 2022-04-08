import React, { useState, useRef } from 'react';
import CreateUser from '../components/react/CreateUser';
import UserList from '../components/react/UserList';

const MemoPage = () => {
  // TODO: input 입력값을 onChange로 상태관리해야하나??
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    // 불변성을 지키며 배열 추가하는 방법
    // 1. spread 연산자 사용하기
    setUsers([...users, user]);
    // 2. concat 사용하기
    // 기존의 배열을 수정하지않고, 새로운 원소가 추가된 새로운 배열을 만들어줌.
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });
    nextId.current += 1;
  };

  const onRemove = (num: number) => {
    setUsers(users.filter((ele) => ele.id !== num));
  };

  return (
    <div>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} />
    </div>
  );
};
export default MemoPage;
