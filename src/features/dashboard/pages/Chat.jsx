import React, { useState } from 'react';

import avaratSvg from '../assets/images/avatar.png';
import ChatList from '../components/chat/ChatList';
import ChatBox from '../components/chat/ChatBox';

export default function Chat() {
  const [activeChat, setActiveChat] = useState();

  const msgs = [
    {
      id: 1,
      user: { dp: avaratSvg, name: 'smith' },
      type: 'send',
      time: 'Last seen, 5.02pm',
      status: 'active',
      message: 'hello how are you?',
    },
    {
      id: 2,
      user: { dp: avaratSvg, name: 'bacha' },
      type: 'send',
      time: 'Online',
      status: 'active',
      message: 'waiting for you',
    },
    {
      id: 3,
      user: { dp: avaratSvg, name: 'chikna' },
      type: 'received',
      time: 'Last seen, 10.52am',
      status: 'active',
      message: 'I am in class',
    },
  ];

  return (
    <div className="relative rounded-[30px] bg-smokeGray">
      <div className="py-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">
          <ChatBox msgs={msgs} />
          <ChatList chats={msgs} setActiveChat={setActiveChat} />
        </div>
      </div>
    </div>
  );
}
