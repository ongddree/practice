interface UserType {
  id: number;
  username: string;
  email: string;
}

interface UserProps {
  user: UserType;
}

interface UsersProps {
  users: Array<UserType>;
}

// TODO: UserType 바로 적용 안되는 이유
function User({ user }: UserProps) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList({ users }: UsersProps) {
  return (
    <div>
      {users.map((user: UserType, index: number) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;
