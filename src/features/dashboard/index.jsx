import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SLUGS } from './shared/constants';
import DashboardLayout from './components/Layout/DashboardLayout';
import Home from './features/home/Home';
import Events from './features/events/Event';
import Friends from './features/friends/Friends';
import SportsPartner from './features/sportspartner/SportsPartner';
import Settings from './features/settings/SetProfile';
import MyProfile from './features/settings/MyAccount';
import CreateEvent from './features/events/CreateEvent';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path={SLUGS.UserProfile} element={<MyProfile />} />
        <Route path={SLUGS.Events} element={<Events />} />
        <Route path={SLUGS.CreateEvent} element={<CreateEvent />} />
        <Route path={SLUGS.Friends} element={<Friends />} />
        <Route path={SLUGS.SportsPartner} element={<SportsPartner />} />
        <Route path={SLUGS.Settings} element={<Settings />} />
        <Route path={SLUGS.Home} element={Home} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
