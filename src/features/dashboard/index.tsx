import { Route, Routes, Navigate } from 'react-router-dom';

import { SLUGS } from './shared/constants';
import DashboardLayout from './components/layout/DashboardLayout';
import Home from './pages/Home';
import EventsList from './pages/EventsList';
import Social from './pages/Social';
import SportsPartner from './pages/SportPartner';
import Settings from './pages/Settings';
import CreateEventForm from './pages/CreateEventForm';
import EventMap from './pages/EventsMap';
import Chat from './pages/Chat';
import MyActions from './pages/MyActions';
import CreateSportsPartnerForm from './pages/CreateSportsPartnerForm';
import EventDetail from './pages/EventDetail';
import UserProfile from './pages/UserProfile';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path={SLUGS.Home} element={<Home />} />
        <Route path={SLUGS.MyActions} element={<MyActions />} />
        <Route path={SLUGS.Events} element={<EventsList />} />
        <Route path={SLUGS.EventsMap} element={<EventMap />} />
        <Route path={SLUGS.CreateEvent} element={<CreateEventForm />} />
        <Route path={SLUGS.Social} element={<Social />} />
        <Route path={SLUGS.SportsPartner} element={<SportsPartner />} />
        <Route path={SLUGS.CreateSportsPartnerPost} element={<CreateSportsPartnerForm />} />
        <Route path={SLUGS.Chat} element={<Chat />} />
        <Route path={SLUGS.Settings} element={<Settings />} />
        <Route path={SLUGS.Event + '/:id'} element={<EventDetail />} />
        <Route path={SLUGS.UserProfile + '/:id'} element={<UserProfile />} />

        <Route path="*" element={<Navigate to={SLUGS.Home} />} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
