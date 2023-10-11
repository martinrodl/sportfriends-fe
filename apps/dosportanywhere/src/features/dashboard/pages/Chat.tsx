import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import { useSelector } from 'react-redux';

import { selectAuth } from 'store/slices';
import { useGetUserChatsQuery } from 'services/chatApi';

import avaratSvg from '../assets/images/avatar.png';
import ChatList from '../components/chat/ChatList';
import ChatBox from '../components/chat/ChatBox';

export default function Chat() {
  const auth = useSelector(selectAuth);
  const { data, isSuccess, error } = useGetUserChatsQuery('');
  const { chats } = data || {};
  const location = useLocation();
  const [activeChat, setActiveChat] = useState(null);

  const socket = io('ws://martinrodl.me/api/socket/chat', {
    reconnectionDelayMax: 10000,
    auth: {
      token: auth.accessToken,
    },
  });

  const createNewChat = (newUserId) => {
    return {
      messages: [],
      participants: [newUserId, auth.id],
    };
  };

  useEffect(() => {
    if (isSuccess) {
      if (location.state?.userId) {
        const newChat = createNewChat(location.state.userId);
        setActiveChat(newChat);
      } else {
        setActiveChat(chats[0]);
      }
    }
  }, [isSuccess]);

  return (
    <div className="max-w-[920px] mx-auto px-4 mt-12 relative rounded-[30px] bg-smokeGray">
      <div className="py-5 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-6">
          {activeChat ? <ChatBox chat={activeChat} socket={socket} userId={auth.id} /> : null}
          <ChatList chats={chats} setActiveChat={setActiveChat} />
        </div>
      </div>
    </div>
  );
}
