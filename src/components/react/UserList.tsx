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
function User({ user, onRemove, onToggle }: UserProps) {
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
}

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

export default UserList;

const UserName = styled.b<{ active: boolean }>`
  ${({ active }) => (active ? 'color:green' : 'color:black')}
`;
