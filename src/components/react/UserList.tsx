import React from 'react';
import styled from 'styled-components';
interface UserType {
  id: number;
  username: string;
  email: string;
  active: boolean;
}

interface UserProps {
  user: UserType;
  onRemove: (e: number) => void;
  onToggle: (e: number) => void;
}

interface UsersProps {
  users: Array<UserType>;
  onRemove: (e: number) => void;
  onToggle: (e: number) => void;
}

// TODO: UserType 바로 적용 안되는 이유
const User = React.memo(function User({ user, onRemove, onToggle }: UserProps) {
  //useEffect안에서 사용하는 props나 상태가 있으면 , 꼭 deps를 넣어야 useEffect 에 등록한 함수가 최신 상태를 가리키게 됨
  // TODO: useEffect mount,unmount 다시 정리
  // useEffect(() => {
  //   console.log(user);
  //   console.log('실행');
  // }, [user]);

  return (
    <div>
      <UserName
        active={user.active}
        onClick={() => {
          onToggle(user.id);
        }}
      >
        {user.username}
      </UserName>{' '}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }: UsersProps) {
  return (
    <div>
      {users.map((user: UserType, index: number) => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default React.memo(UserList);

const UserName = styled.b<{ active: boolean }>`
  ${({ active }) => (active ? 'color:green' : 'color:black')}
`;
