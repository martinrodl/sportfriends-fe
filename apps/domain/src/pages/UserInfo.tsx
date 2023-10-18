import { User } from '../models';

interface UserInfoProps {
  user: User;
}

const UserInfo = ({ user }: UserInfoProps) => {
  console.log(user);
  return (
    <div className="flex flex-col">
      <h1>{user.name}</h1>
      <h2>{user.address}</h2>
    </div>
  );
};

export default UserInfo;
