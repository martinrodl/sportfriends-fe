import { useState } from 'react';

import { SwitchMenu } from '@sportfriends-fe/shared/ui';

import SetProfile from '../components/settings/SetProfile';
import SetProfileImg from '../components/settings/SetProfileImg';
import SetCredentials from '../components/settings/SetCredentials';

const Settings = () => {
  const menuItems = [
    {
      text: 'Profile',
      component: <SetProfile />,
    },
    {
      text: 'Profile image',
      component: <SetProfileImg />,
    },
    {
      text: 'Credentials',
      component: <SetCredentials />,
    },
  ];

  const [activeMenu, setActiveMenu] = useState(0);

  return (
    <div className="max-w-[920px] mx-auto px-4 mt-12">
      <div className="mb-6">
        <SwitchMenu
          menuItems={menuItems}
          activeIndex={activeMenu}
          setIndex={setActiveMenu}
        />
      </div>
      {menuItems[activeMenu].component}
    </div>
  );
};

export default Settings;
