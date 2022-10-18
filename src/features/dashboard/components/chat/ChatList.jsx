import React from 'react';

export default function ChatList({ chats = [], setActiveChat }) {
  return (
    <div>
      <h1 className="text-xl text-[#2D3F65] pb-4 pt-2">Recent</h1>
      {chats.map((item, index) => (
        <ChatBlock setActiveChat={setActiveChat} item={item} index={index} key={'chatblock - ' + index} />
      ))}
    </div>
  );
}

function ChatBlock({ setActiveChat, index, item }) {
  return (
    <div
      key={index}
      className="flex gap-x-4 border-b py-4 transition-all duration-300 hover:shadow-xl px-4 cursor-pointer"
      onClick={() => setActiveChat(item.id)}
    >
      <div>
        <img src={item.user.dp} alt="" className="w-[50px] h-[50px] rounded-full" />
      </div>
      <div className="flex flex-col self-center">
        <h2>{item.user.name}</h2>
        <p>{item.message}</p>
      </div>
    </div>
  );
}
