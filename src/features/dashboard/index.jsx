import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SLUGS } from './shared/constants';
import DashboardLayout from './components/DashboardLayout';
import Home from './features/home/Home';
import Events from './features/events/Event';
import Friends from './features/friends/Friends';
import SportsPartner from './features/sportspartner/SportsPartner';
import Settings from './features/settings/SetProfile';
import MyAccount from './features/settings/MyAccount';
import CreateEventForm from './pages/CreateEventFormNew';
import EventMap from './features/events/EventMap';
import Chat from './features/chat/Chat';
import MyActions from './pages/MyActions';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index path={SLUGS.Home} element={<Home />} />
        <Route path={SLUGS.MyActions} element={<MyActions />} />
        <Route path={SLUGS.Events} element={<Events />} />
        <Route path={SLUGS.EventsMap} element={<EventMap />} />
        <Route path={SLUGS.CreateEvent} element={<CreateEventForm />} />
        <Route path={SLUGS.Friends} element={<Friends />} />
        <Route path={SLUGS.SportsPartner} element={<SportsPartner />} />
        <Route path={SLUGS.Chat} element={<Chat />} />
        <Route path={SLUGS.Settings} element={<Settings />} />
        <Route path={SLUGS.UserProfile} element={<MyAccount />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
