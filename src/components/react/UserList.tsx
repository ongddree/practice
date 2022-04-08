interface UserType {
  id: number;
  username: string;
  email: string;
}

interface UserProps {
  user: UserType;
  onRemove: (e: number) => void;
}

interface UsersProps {
  users: Array<UserType>;
  onRemove: (e: number) => void;
}

// TODO: UserType 바로 적용 안되는 이유
function User({ user, onRemove }: UserProps) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove }: UsersProps) {
  return (
    <div>
      {users.map((user: UserType, index: number) => (
        <User key={user.id} user={user} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default UserList;
