import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SLUGS } from '@sportfriends-fe/shared/constants';
import { selectAuth } from '@sportfriends-fe/shared/data/store';

const useAuth = () => {
  const auth = useSelector(selectAuth);
  return auth && auth?.accessToken;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to={SLUGS.home} />;
};

export default ProtectedRoutes;
