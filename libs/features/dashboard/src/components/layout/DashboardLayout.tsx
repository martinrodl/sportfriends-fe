import React, { useState } from 'react';

import { ShadowModal } from '@sportfriends-fe/shared/ui';

import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSideBar = () => {
    setSidebarOpen(true);
  };
  const closeSideBar = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="w-screen h-1">
      <ShadowModal isOpened={sidebarOpen} onRequestClose={closeSideBar}>
        <Sidebar isClosed={sidebarOpen} onClose={closeSideBar} />
      </ShadowModal>
      <div className="flex flex-row flex-1 bg-[#FDFDFD]">
        <div className="hidden md:block mt-5 ml-5">
          <Sidebar isClosed={sidebarOpen} onClose={closeSideBar} />
        </div>
        <main className="flex-1 flex flex-col w-1 px-10">
          <Navbar openSideBar={openSideBar} />
          <>{children}</>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
