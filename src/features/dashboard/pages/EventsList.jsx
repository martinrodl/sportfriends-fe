import React from 'react';

import EventFull from '../components/EventFull';
import EventListHeader from '../components/EventListHeader';

const Events = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <EventListHeader />
        <EventFull />
      </div>
    </div>
  );
};

export default Events;
