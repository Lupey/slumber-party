import React from 'react';
import { getUser, getUserList } from '../../services/UserService';
import { User } from '../../types/User.model';
import Signup from './Signup/Signup';
import SleepToggle from './SleepToggle/SleepToggle';
import Users from './Users/Users';

export interface HomePageProps {

}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  const [userList, setUserList] = React.useState<User[]>([]);
  const [userInfo, setUserInfo] = React.useState<User | null>(null);
  
  const fetchUserInfo = async (id: string) => {
    const user = await getUser(id);

    if (!user) {
      // Remove useless id since the server couldn't find it
      window.localStorage.removeItem('id');
    }

    setUserInfo(user);
  };

  const fetchUserList = async () => {
    const result = await getUserList();
    setUserList(result);
  };

  React.useEffect(() => {
    fetchUserList();

    const id = window.localStorage.getItem('id');
    if (id) {
      fetchUserInfo(id);
    }

    // setInterval(() => {
    //   fetchUserList();
    // }, 10 * 1000);
  }, []);

  React.useEffect(() => {
    fetchUserList();
  }, [userInfo?.state]);

  return (<>
    {!userInfo && <Signup updateUserInfo={fetchUserInfo} />}
    {userInfo && <>
      <SleepToggle userInfo={userInfo} updateUserList={fetchUserList} updateUserInfo={fetchUserInfo} />
      <Users userList={userList} userInfo={userInfo} />
    </>}
  </>);
};

export default HomePage;