import { useState, useEffect } from 'react';
import NotFound from './pages/NotFound';
import { Profile } from '@sportfriends-fe/features/profile';

import {
  useGetSpecificUserEventsQuery,
  useGetSpecificUserByNameQuery,
} from '@sportfriends-fe/shared/data/services';

const App = () => {
  const userName = window.location.host.split('.')[0];
  const {
    data: userData,
    error,
    isLoading,
  } = useGetSpecificUserByNameQuery(userName);
  const {
    data: eventsData,
    error: eventsError,
    isLoading: eventsLoading,
  } = useGetSpecificUserEventsQuery(String(userData?.id));

  console.log('userData', userData);
  console.log('eventsData', eventsData);

  if (error) {
    return <NotFound userName={'test'} />;
  }

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (userData) {
    return <Profile />;
  }
};

export default App;
