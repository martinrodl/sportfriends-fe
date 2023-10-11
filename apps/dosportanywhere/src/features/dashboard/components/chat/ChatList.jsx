import React from 'react';

import avaratSvg from '../../assets/images/avatar.png';

export default function ChatList({ chats = [], setActiveChat }) {
  if (chats === undefined || chats?.length === 0) {
    return (
      <div>
        <h1>There is no conversation. Check Sportparner and find buddy.</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-xl text-[#2D3F65] pb-4 pt-2">Conversations</h1>
      {chats?.map((chat, index) => (
        <ChatBlock setActiveChat={setActiveChat} chat={chat} index={index} key={'chatblock - ' + index} />
      ))}
    </div>
  );
}

function ChatBlock({ setActiveChat, index, chat }) {
  return (
    <div
      key={index}
      className="flex gap-x-4 border-b py-4 transition-all duration-300 hover:shadow-xl px-4 cursor-pointer"
      onClick={() => setActiveChat(chat)}
    >
      <div>
        <img src={avaratSvg} alt="" className="w-[50px] h-[50px] rounded-full" />
      </div>
      <div className="flex flex-col self-center">
        <h2>{chat?.participants[0].name}</h2>
        <p>{chat?.messages[0]?.message}</p>
      </div>
    </div>
  );
}
