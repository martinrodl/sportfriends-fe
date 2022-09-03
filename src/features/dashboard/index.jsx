import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { SLUGS } from './shared/constants';
import DashboardLayout from './components/DashboardLayout';
import Home from './features/home/Home';
import EventsList from './pages/EventsList';
import Friends from './pages/Friends';
import SportsPartner from './pages/SportPartner';
import Settings from './features/settings/SetProfile';
import MyAccount from './features/settings/MyAccount';
import CreateEventForm from './pages/CreateEventForm';
import EventMap from './features/events/EventMap';
import Chat from './features/chat/Chat';
import MyActions from './pages/MyActions';
import CreateSportsPartnerForm from './pages/CreateSportsPartnerForm';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route index path={SLUGS.Home} element={<Home />} />
        <Route path={SLUGS.MyActions} element={<MyActions />} />
        <Route path={SLUGS.Events} element={<EventsList />} />
        <Route path={SLUGS.EventsMap} element={<EventMap />} />
        <Route path={SLUGS.CreateEvent} element={<CreateEventForm />} />
        <Route path={SLUGS.Friends} element={<Friends />} />
        <Route path={SLUGS.SportsPartner} element={<SportsPartner />} />
        <Route path={SLUGS.CreateSportsPartnerPost} element={<CreateSportsPartnerForm />} />
        <Route path={SLUGS.Chat} element={<Chat />} />
        <Route path={SLUGS.Settings} element={<Settings />} />
        <Route path={SLUGS.UserProfile} element={<MyAccount />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
