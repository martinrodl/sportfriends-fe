import { useState } from 'react';

import { SwitchMenu } from 'shared/components';

import Events from '../features/myactions/Events';
import SportPartner from '../features/myactions/SportPartner';

const MyActions = () => {
  const menuItems = [
    {
      text: 'Joined Events',
      component: <Events type="joined" />,
    },
    {
      text: 'Created Events',
      component: <Events type="created" />,
    },
    {
      text: 'Sport Partner',
      component: <SportPartner />,
    },
  ];

  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="max-w-[920px] mx-auto px-4 mt-12">
      <div className="mb-6">
        <SwitchMenu menuItems={menuItems} activeIndex={activeMenu} setIndex={setActiveMenu} />
      </div>
      {menuItems[activeMenu].component}
    </div>
  );
};

export default MyActions;
