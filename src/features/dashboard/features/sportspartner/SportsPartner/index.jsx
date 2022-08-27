import React from 'react';

import Header from './Header';
import PartnerCard from './PartnerCard';

const SportsPartner = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <Header />
        <PartnerCard />
      </div>
    </div>
  );
};

export default SportsPartner;
