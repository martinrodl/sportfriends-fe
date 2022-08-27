import React from 'react';

import EventList from './EventList';
import Header from './Header';

const Event = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <Header />
        <EventList />
      </div>
    </div>
  );
};

export default Event;
