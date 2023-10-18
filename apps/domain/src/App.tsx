import { useState, useEffect } from 'react';
import NotFound from './pages/NotFound';
import UserInfo from './pages/UserInfo';

import { getUserInfo } from './api';
import { User } from './models';

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<unknown | null>(null);
  const userName = window.location.host.split('.')[0];

  const getUser = async () => {
    try {
      const userInfo = await getUserInfo(userName);
      setUser(userInfo);
    } catch (e) {
      setError(e);
    }
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
    return <NotFound userName={userName} />;
  }

  if (user) {
    console.log('*');
    return <UserInfo user={user} />;
  }

  return <h1>Loading</h1>;
};

export default App;
